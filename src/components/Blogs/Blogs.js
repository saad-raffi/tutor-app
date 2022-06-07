import React from 'react';

const Blogs= () => {
    return (
        <div>
            <h2>Difference Between Authentication and Authurization </h2>
            <p>The main difference between authentication and authorization is that the authentication is the process of checking a user’s details to identify him and grant access to the system while the authorization is the process of checking the authenticated user’s privileges or permissions to access the resources of the system.
                Authentication validates user credentials .Authurization validates user’s permission.
            </p>
            <h2>Why are you using firebase ? What other options do you have to implement
authentication?
</h2>
            <p>Nowadays, security is very important on websites and apps. That’s mainly to ensure that private data is not leaked to the public and someone doesn’t do actions on your behalf.Firebase is a BaaS that helps us with various services such as database authentication and cloud storage.Its a google products and thats why its security is strong .And it can used for free hosting as well.Some other authentication system are Parse, AWS Amplify,RxDB etc</p>
            <h2>What other services does firebase provide other than authentication
</h2>
<p>
    There are also many other services provided by firebase .SOme of them are Hosting, Cloud Storage ,Google Analytics , Predictions etc.
</p>
        </div>
    );
};

export default Blogs;