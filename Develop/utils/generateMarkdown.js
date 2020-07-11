function generateMarkdown(data) {
  return `
# ${data.title}
# Table of Content
-[description](#description)
-[installation](#installation)
-[usage](#usage)
-[licenses](#licenses)
-[contribution](#contribution)
-[test](#test)
-[username](#username)
-[profile](#profile)

${data.username}
##username:

${data.description}
##description:

${data.installation}
##installation:

${data.usage}
##usage:

${data.licenses}
##licenses:

${data.contribution}
##contribution:

${data.test}
##test:

${data.email}
##email:

${response.profile}
##profile:
`;
}

module.exports = generateMarkdown;
