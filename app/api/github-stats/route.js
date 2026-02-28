// app/api/github-stats/route.js
export async function GET() {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          totalCommitContributions
          totalPullRequestContributions
          totalIssueContributions
          totalRepositoryContributions
          contributionCalendar {
            totalContributions
          }
        }
        repositories(first: 100, ownerAffiliations: OWNER) {
          totalCount
        }
        createdAt
      }
    }
  `;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables: { username } }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    const data = await res.json();
    const user = data.data.user;
    const contributions = user.contributionsCollection;

    // Calculate years of experience from account creation
    const createdAt = new Date(user.createdAt);
    const yearsExp = Math.floor(
      (new Date() - createdAt) / (1000 * 60 * 60 * 24 * 365)
    );

    return Response.json({
        totalCommits: contributions.contributionCalendar.totalContributions, // ✅ 2,638
        totalRepos: user.repositories.totalCount,
        yearsOfExperience: yearsExp,
    });
  } catch (error) {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}