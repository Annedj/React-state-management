import React, { Component } from 'react';

class UsersList extends Component {
  	render() {
    	console.log('Props', this.props);
      	const usersArray = this.props.users
        const moviesArray = this.props.movies
      	const preferences = 
			this.props.profiles.map((profile) => (
     		{
    			user: usersArray.find((element) => ( element.id === Number(profile.userID))).name,
				movie: moviesArray.find((element) => ( element.id === Number(profile.favoriteMovieID))).name,
              	id: profile.id
    		} 
    	));
		return (
        	<ol>
			{ preferences.map((preference) => (
          <p key={preference.id}>{preference.user}'s favorite movie is {preference.movie}.</p>
        	))}          	
  			</ol>
        )
    }
}

export default UsersList