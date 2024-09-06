import React, {useState} from "react";

export const useEmail = () => {
	let [email, setEmail] =useState ('');

	return {
		email,
		setEmail
	}

}