# Rewarding the Roles using Bounties

* [Glossary](#glossary)
* [Bounty definition](#bounty-definition)
  * [Title](#title)
  * [Scope](#scope)
  * [Deliverables](#deliverables)
  * [Funding Circle](#funding-circle)
  * [Bounty owner/gardener](#bounty-ownergardener)
  * [Gain for the Role](#gain-for-the-role)
  * [Size](#size)
* [Who can create a new bounty](#who-can-create-a-new-bounty)
* [How to create a new bounty](#how-to-create-a-new-bounty)
* [Pair bounty](#pair-bounty)
* [Objecting bounties](#objecting-bounties)
* [Work on Bounty](#work-on-bounty)
  * [Gardener](#gardener)
  * [Worker](#worker)
  * [Reviewer](#reviewer)
* [Challenging bounties](#challenging-bounties)
* [Links](#links)

## Glossary

[Role](https://www.holacracy.org/constitution#art11), [Action](https://www.holacracy.org/constitution#art122), [Project](https://www.holacracy.org/constitution#art122) and [Circle](https://www.holacracy.org/constitution#art21) are all concepts defined in Holacracy Constitution.

## Bounty definition

Bounty is a reward for completing a properly defined Action or Project within a Circle. For simplicity, we will may call such Actions or Projects themselves a Bounties from now on.

Properly defined bounty must specify the following attributes

### Title

Succinct name for the bounty.

Example:
> Implement Basic Token Governance UI

### Scope

A list of specific things which should be done to deliver the bounty. These could be seen as requirements to verify/review bounty against.

### Deliverables

Artifacts produced as the result of this bounty. Something that could be verified/reviewed. Some examples: updated code, deployment made, blog post published, public event conducted etc

### Funding Circle

The Circle to fund this bounty

### Bounty owner/gardener

The Role who is responsible for the bounty. The Role should belong to Funding Circle.

### Gain for the Role

How the completion of this bounty helps to pursue the Role's purpose

### Size

Size of the bounty.

We use t-shirt sizes:

* XS. 200 DAI
* S. 350 DAI
* M. 550 DAI
* L. 900 DAI
* XL. 1400 DAI

## Who can create a new bounty

Any Role within the Organization. People without Roles may also propose a bounty on behalf of some Role.

## How to create a new bounty

1. Create a Github issue with properly defined bounty description (see above) in an appropriate repository.
2. If the bounty spans across multiple repositories, consider splitting it in a smaller per-repo bounties if possible or put in `leapdao/meta` repository.
3. Submit proposal via the [bounty form](http://bounty.leapdao.org/viewform)
4. Add the bounty to the [bounties board](https://github.com/orgs/leapdao/projects/6)

## Pair bounty

If two people work on the bounty together, the payout increases by 1.5x.

## Objecting bounties

Any bounty can be objected by anyone through Slack or GitHub for 2 days after its creation. A valid objection should describe how the bounty is not helping bounty Role to achieve it's purpose or how the bounty is harming the Organization. The objector must ensure that their objection is clearly communicated to the bounty proposer and e.g. not misunderstood as a minor comment on the issue.

In the cases where objector and proposer are not able to come to an acceptable solution, the Circle’s facilitator must be involved to enact Integrative Decision-Making Process as specified in Holacracy constitution ([§1.3.5](https://www.holacracy.org/constitution#art135)) to solve the objection as a tension.

If the tension was integrated successfully or if there weren’t any public objections, the bounty is considered approved.

## Work on Bounty

### Gardener

Gardener is the one who creates the bounty and is responsible for it's completion.

Gardener is expected to:

* find a Worker for the Bounty
* help the Worker to understand the scope of the Bounty
* find a Reviewer for the Bounty.
* ensure the Bounty doesn’t get stalled
* request the payout for the Bounty once it is done and reviewed (see "Payout" section below)

### Worker

Worker is the one who actually implements the Bounty.

Worker is expected to:

* create WIP Pull Request within 4 days from the start of the bounty (if applicable)
* actively work on the Bounty according to it's Scope, don't linger (see "Challenging bounties" section below)
* stay accountable by publishing WIP updates at least every 2 working days:
  * for coding bounties, the Worker is expected to push commits in WIP Pull Request.
  * for writeups, the Worker is expected to share a draft Hackmd document (or other meidum of his choice) he is working at.
* request a review once the work is done. Review is requested on Slack in a Circle's channel like this:
  > 🌴👀 Requesting review for **\<bounty title\>** \
  > Issue: \<link to the Bounty on Github\> \
  > Product: \<link to deliverable, e.g. PR or writeup\>

### Reviewer

Reviewer is the person who reviews the Bounty's deliverables.

Reviewer is expected to:

* do review in timely manner, don't linger (see "Challenging bounties" section below)
* ensure all the delivables are provided
* ensure all the Scope items are addressed
* for coding bounties:
  * make sure the code is compiling/building correctly
  * review the code for logical correctness, inefficiencies and style (TBD)
  * ensure unit tests are passing
  * ensure code coverage is not reduced
  * ensure integration tests are passing for the PR branch
* for public writeups
  * do fact check
  * check readability
  * correct grammar and punctuation
  * check social network preview e.g. twitter card (if applicable)
* forward all the issues found publicly to the Worker (e.g. as comments on Github)
* approve the PR once the review is complete successfuly (if applicable)

## Challenging bounties

If bounty has no progress for 4 days, then anyone can challenge the bounty.

Once the bounty is challenged, the worker has 3 more days to deliver some progress on the bounty (Gardener can make exception and extend period to 5 days 1x, unless Gardener is also working). If Worker fails to make progress within period, the bounty is up for grabs by anyone.

## Payout

Funds allocated for bounty are split between Gardener, Worker and Reviewer in a proportion defined by Gardener (can be negotiated).

It is Gardener's duty to request the payout once the bounty is completed and reviewed. Payout is requested on Slack in a Circle's channel like this:
  > 🌴💰 Requesting payout for **\<bounty title\>** \
  > Issue: \<link to the Bounty on Github\> \
  > Product: \<link to deliverable, e.g. PR or writeup\> \
  > gardener: \<@gardener\> \<gardener share\> \
  > worker: \<@worker\> \<worker share\> \
  > reviewer: \<@reviewer\> \<reviewer share\>

## Links

* [Bounty issue template](https://github.com/leapdao/leap-node/blob/master/.github/ISSUE_TEMPLATE/bounty.md)
