const ghpages = require('gh-pages');
const path = require('path');
const pkg = require('../package.json');

const repo = pkg.repository;

const branch = process.argv[2];
const commit = process.argv[3] || 'chore: Auto push after build';
const localPath = process.argv[4] || path.resolve(__dirname, '../public');
const branchPath = '';

const SSH_URL = repo.replace('https://github.com/', 'git@github.com:');

ghpages.publish(
  localPath,
  {
    branch,
    dest: branchPath,
    repo: SSH_URL,
    message: commit,
    // silent: GH_TOKEN ? true : false,
    dotfiles: true,
  },
  err => {
    if (err) {
      console.error(err);
      return;
    }
    console.info(
      `success publish ${localPath} to ${repo.replace(
        '.git',
        '',
      )}/tree/${branch}/${branchPath}`,
    );
  },
);
