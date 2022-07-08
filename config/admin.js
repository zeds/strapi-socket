module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e59e546f3ee9ca2b2f053851a0ba07d0'),
  },
});
