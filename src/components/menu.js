import React from 'react';
import '../styles/menu.scss';



const CardDetail = () => (
	<div className="container ">

	
		<table className="menu-layout">
		  
		    <thead>
		    <tr>
		    	<th>
				<h2 className="card__detail--title-1 pb-3 pt-5">Brunch Menu</h2>
		    	</th>
		    </tr>
		    </thead>

		    <tbody>
		    	<tr>
		    		<td>
		    		Green Tortilla with Smoked Salmon
		    		</td>
		    		<td className="font-weight-bold text-right">
		    		$9
		    		</td>
		    	</tr>

		    	<tr>
		    		<td>
		    		Roasted Tomato and Avacado on toast
		    		</td>
		    		<td className="font-weight-bold text-right">
		    		$8
		    		</td>
		    	</tr>

		    	<tr>
		    		<td>
		    		Ginger chicken stir fry
		    		</td>
		    		<td className="font-weight-bold text-right">
		    		$11.5
		    		</td>
		    	</tr>

		    	<tr>	
		    		<td>
		    		ShakShuka
		    		</td>
		    		<td className="font-weight-bold text-right">
		    		$7
		    		</td>
		    	</tr>
		    </tbody>

		    <thead>
		    <tr>
		    	<th>
				<h2 className="card__detail--title-1 pb-3 pt-5">Desserts</h2>
		    	</th>
		    </tr>
		    </thead>

		    <tbody>
		    	

		    	<tr>
		    		<td>
		    		Jamaican ginger and caramel cake
		    		</td>
		    		<td className="font-weight-bold text-right">
		    		$2.5
		    		</td>
		    	</tr>

		    	<tr>	
		    		<td>
		    		Teff, banana and apricot teao loaf with hazelnut streusel topping
		    		</td>
		    		<td className="font-weight-bold text-right">
		    		$3
		    		</td>
		    	</tr>
		    </tbody>

		    <thead>
		    <tr>
		    	<th>
				<h2 className="card__detail--title-1 pb-3 pt-5">Drinks</h2>
		    	</th>
		    </tr>
		    </thead>

		    <tbody>
		    	<tr>
		    		<td>
		    		Virgin Watermelon Sangria
		    		</td>
		    		<td className="font-weight-bold text-right">
		    		$2.5
		    		</td>
		    	</tr>

		    	<tr>
		    		<td>
		    		Classic Mimosas
		    		</td>
		    		<td className="font-weight-bold text-right">
		    		$3
		    		</td>
		    	</tr>

		    	<tr>
		    		<td>
		    		Bellini
		    		</td>
		    		<td className="font-weight-bold text-right">
		    		$2
		    		</td>
		    	</tr>

		    	<tr>	
		    		<td>
		    		Orange and cranberry juice
		    		</td>
		    		<td className="font-weight-bold text-right">
		    		$2
		    		</td>
		    	</tr>
		    </tbody>
		    </table>

    </div>
)

export default CardDetail;
