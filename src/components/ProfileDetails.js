import React from 'react';
import Moment from 'react-moment';
import './index.css';

const ProfileDetails = (props) => {
	return (
		<div>

			<div>
				{props.infoclean.avatar_url ?
					<img src={props.infoclean.avatar_url}
						alt="Profile" class="image"
						/>:null}
			
          		{props.infoclean.name ? <div><span class="heading-info">Name:</span><p>{props.infoclean.name}</p></div> : null }
        	</div>

        	<div class="profie-details">
          		{props.infoclean.bio ? <span><p  class="heading-info">Bio:</p><p>{props.infoclean.bio}</p></span> : null }
        	</div>
        	<div class="profie-details">
          		{props.infoclean.created_at ? <div><p  class="heading-info">Joined:</p><p>{
          		<Moment from={new Date()}>{props.infoclean.created_at}</Moment>}</p></div> : null }
        	</div>
        	<div class="profie-details">
          		{props.infoclean.blog ? <div><p  class="heading-info">Blog:</p><p><a href={
             		props.infoclean.blog.search("http") !== -1 ? props.infoclean.blog
            		: "http://" +  props.infoclean.blog } target="_blank">{props.infoclean.blog}</a></p></div> : null }
        	</div>

        	<div class="profie-details">
          		{props.infoclean.location ? <div><p  class="heading-info">Location:</p><p>{props.infoclean.location}</p></div> : null }
        	</div>
        	<div class="profie-details">
          		{props.infoclean.company ? <div><p  class="heading-info">Company:</p><p>{props.infoclean.company}</p></div> : null }
        	</div>
        	<div class="profie-details">
          		{props.infoclean.public_repos ? <div  class="heading-info"><p>Public Repos:</p><p>{props.infoclean.public_repos}</p></div> : null }
        	</div>
        	<div class="profie-details">
          		{props.infoclean.followers ? <div><p  class="heading-info">Followers:</p><p>{props.infoclean.followers}</p></div> : null }
        	</div>
        	<div class="profie-details">
          		{props.infoclean.following ? <div  class="heading-info"><p>Following:</p><p>{props.infoclean.following}</p></div> : null }
        	</div>
        	<div class="profie-details">
          		{props.infoclean.html_url ? <div><p  class="heading-info"><a href={props.infoclean.html_url} target="_blank">View on GitHub</a></p></div> : null }
        	</div>
        	<div>
          		{props.infoclean.login ? <div>{ <img src={"http://ghchart.rshah.org/"+props.infoclean.login} alt="Github chart" />}
          		<br/><a href="https://ghchart.rshah.org/" target="_blank">Source for GitHub Chart API</a></div> : null }
        	</div>
      </div>
    )
};
export default ProfileDetails;
