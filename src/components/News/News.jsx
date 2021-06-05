import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://lh3.googleusercontent.com/proxy/Jcfywfb9g0NuJqCRRoyRHzVy2A4Vrk4lk4_izEPF4ILSZPd0mxwfrNLypaXW_LKHHT3LjbTGrXsWkFuq6fTdD9XXIJUgW6w1Z-C2-JYrOPw"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;