const core = require('@actions/core');

async function run() {
/*
1. Parse inputs:
     1.1. base-branch from which to check for updates
     1.2. target-branch to create the PR
     1.3 Github token for authentication purposes (to create PR's)
     1.4 Working directory to check for dependencies

 2. execute the npm command within the working directory.
 3. Check whether there are modified package*.json files
 4. If there are modified files:
    4.1 Add and commit files to the target-branch
    4.2. Create a PR to the base branch using the octokit API
 5. Otherwise , conclude the custom action

 */

  core.info('I am a custom JS action');
}

run();