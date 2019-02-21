import React from 'react';
import Moment from 'react-moment';
import './index.css';
const SortedList = (props) => {
	if (props.repitems) {
		return (
			<ul>
				<span class="heading-info"><b>Own Repositories</b></span>
				<br/>
				{props.repitems.map((repitem) => 
					<li key={repitem.id}>
						<div class="repositories">
							<div>
								<a href={repitem.html_url} target="_blank">
								{repitem.name}</a><br/> Started <Moment from={new Date()}>
								{repitem.created_at}</Moment>
							</div>
							<div>
								<i>{repitem.description}</i>
							</div>
							<div>
								Language : {repitem.language} || Watch : {repitem.watchers_count} || Forks : {repitem.forks_count}
							</div>
						</div>
					</li>	
				)}
			</ul>
		)
	}
	else
	{
		return null;
	}
};

export default SortedList;