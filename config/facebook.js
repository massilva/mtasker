/**
 * Facebook Configuration (sails.config.facebook)
 *
 */
module.exports.facebook = {
	FACEBOOK_CLIENT_ID : "1448964011832977",
	FACEBOOK_CLIENT_SECRET : "2414f2d5319373f4c3f29b5b0e2870c6",
	FACEBOOK_AUTH_SCOPE : "email, user_address, user_about_me, user_birthday, user_location, publish_actions, user_friends",
	FACEBOOK_AUTH_CALLBACK_URL : "http://YOUR-IP:PORT/auth/facebook/callback" /*http://localhost:1337/auth/facebook/callback*/
};
