# Contribution Guidelines


### Workflow

1. Fork and clone the repository
    ```sh
    git clone git@github.com:YOUR-USERNAME/LEAPDAO_REPONAME.git
    ```

1. Create a branch in the fork
    
    The branch should be based on the `master` branch in the master repository. Prepend the correct [type](#type) to your branch.

    ```sh
    git checkout -b TYPE/my-feature-or-bugfix master
    ```

1. Commit changes on your branch

    Commit changes to your branch, following the commit message format.

    ```sh
    git commit -m "properly formatted SET statements."
    ```

1. Push the changes to your fork

    ```sh
    git push -u myfork TYPE/my-feature-or-bugfix
    ```

1. Create a Pull Request

    In the Github UI of your fork, create a Pull Request to the `master` branch of the master repository.

    If the branch has merge conflicts or has been outdated, please do a rebase against the `master` branch.


### <a name="commit"></a> Commit message guidelines

Commit messages should follow the [commit message convention](https://conventionalcommits.org/).

#### <a name="type"></a> Type

Should be one of the following:

- **feat:** A new feature
- **fix:** A bug fix
- **chore:** Changes to build and dev processes/tools
- **docs:** Changes to documentation
- **style:** Changes to code style formatting (white space, commas etc)

#### Scope

The `<scope>` of the commit is optional and can be omitted. When used though, it should describe the place or part of the project, e.g. `docs(examples)`, `feat(data)` etc.


### Bounties

1. Review the list of “Available” bounties on our [bounty board](https://github.com/orgs/leapdao/projects/6)
2. Choose the bounty which you feel capable to deliver and which is not assigned yet (no assignee on Github issue)
3. Leave a comment in the bounty issue that you would like to work on the bounty and get approval from bounty Proposer or Verifier.
4. Start working on the issue
   - Within 3 days from the start you must create a WIP pull request for the bounty, which will be used to track the progress.
   - should you have any questions, problems, suggestions or concerns, communicate them as a comment in the bounty issue.
5. Once you think the bounty is complete (check against the Deliverables), leave a comment asking for review.
6. Bounty completion is reviewed by Proposer and Verifier.
7. If approved as completed, the bounty amount is payed out in DAI. Otherwise, you will be asked to make corrections.
