# INFO 343-C In-Class Coding Repo

Fork this repo into your own account by clicking the **Fork** button in the upper-right of the page. This will create a copy of the repo that is all yours. Clone your forked copy to your development machine (not this original repo) so that you can add code, commit it, and push it back to your forked copy on GitHub.

## Pulling Updates

Before each lecture I'll ask you to "pull updates from the upstream master" to pick up new folders and starter files I've added to this repo. To do that, follow these steps.

### On a Lab Machine?

The lab machines completely reset when you log out, so you'll have to do all of these steps every time. First, tell git who you are:

```bash
git config --global user.name "Your Name"
git config --global user.email your-netid@uw.edu
```
Then clone your **forked repo** to your lab machine, and execute these commands **from within the repo directory** to pull the updates:

```bash
git remote add upstream https://github.com/info343c-a17/info343-in-class.git
git pull upstream master
```

If you end up in `vim` to confirm a merge message, just hit `Esc` and type `:wq` (for "write and quit") to accept the default message and get back to your command prompt.

## On Your Own Laptop?

After cloning your **forked repo** for the first time, execute this command only once **from within the repo directory** to setup the upstream remote:

```bash
git remote add upstream https://github.com/info343c-a17/info343-in-class.git
```

When I ask you to pull updates, execute this command **from within the repo directory**:

```bash
git pull upstream master
```

If you end up in `vim` to confirm a merge message, just hit `Esc` and type `:wq` (for "write and quit") to accept the default message and get back to your command prompt.
