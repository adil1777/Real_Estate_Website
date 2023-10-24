import React, { useContext, useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import UseAuthCheck from '../../hooks/UseAuthCheck';
import { useMutation } from 'react-query';
import { useAuth0 } from '@auth0/auth0-react';
import UserDetailContext from '../../Context/UserDetailContext';
import { toFav } from '../../utils/api'; 
import { checkFavourites, updateFavourites  } from '../../utils/common';

const Heart = ({ id }) => { 

    const [heartColor, setHeartColor] = useState("white");
    const { validateLogin } = UseAuthCheck();
    const { user } = useAuth0();

    const {
        userDetails: { favourites, token },
        setUserDetails
    } = useContext(UserDetailContext);

    useEffect(()=> {
        setHeartColor(()=> checkFavourites(id, favourites))
  },[favourites])
     

    const { mutate } = useMutation({
        mutationFn: () => toFav(id, user?.email, token),
        onSuccess: () => { 
            setUserDetails((prev) => ({
                ...prev,
                favourites: updateFavourites(id, prev.favourites)
            }
            ))
        }
    });

    const handleLike = () => {
        if (validateLogin()) {
              mutate()
            setHeartColor((prev) => prev === "#fa3e5f" ? "white" : "#fa3e5f")
           
        }
    };

    return (
        <AiFillHeart size={24} color={heartColor} onClick={(e) => {
            e.stopPropagation();
            handleLike();
        }} />
    );
}

export default Heart;
