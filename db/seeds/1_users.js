exports.seed = function(knex) {
  return knex('users').truncate()
    .then(() => {
      return knex('users').insert([
        {
            user_name: 'donny',
            email: 'test@test.com',
            hashed_password: '$2a$12$cgq0U74fBcurJan.AueBS.4InCeVZd5UW4ZZ5gDM1iYox6wp569vW',
            avatar_url: 'https://vignette.wikia.nocookie.net/deathbattlefanon/images/0/08/2816096-thumbnail_1992608045960713568.jpg/revision/latest?cb=20170828123523',
        },
        {
            user_name: 'jerry',
            email: 'test@test.com',
            hashed_password: '$2a$12$57vnP2geYzjl1gKbNYhsReSED3.9R91dq5lETtFMQp9uZIQkzOOwO',
            avatar_url: 'https://vignette.wikia.nocookie.net/deathbattlefanon/images/0/08/2816096-thumbnail_1992608045960713568.jpg/revision/latest?cb=20170828123523',
        },
        {
            user_name: 'rick',
            email: 'test@test.com',
            hashed_password: '$2a$12$zx8DlElpHZ.qhYZJblYn7Oy8FBQStMUDlP4.4X7no4SvLqoPEsKyu',
            avatar_url: 'https://vignette.wikia.nocookie.net/deathbattlefanon/images/0/08/2816096-thumbnail_1992608045960713568.jpg/revision/latest?cb=20170828123523',
        }
      ]);
    })
};
