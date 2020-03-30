const preferences = {
		this.props.profiles.map((profile) => {
     		{
    			user: this.props.users[profile.userID].name,
				movie: this.props.movies[profile.movieID].name
    		} 
    	})
		};
    	return (
        	<ol>
          { preferences.map((preference) => (
          <p>`${preference.user}'s favourite movie is ${preference.movie}`</p>
        )}
          	</ol>
        )
    }

