import React, { Component } from 'react';
import './KeyGeneratorMessage.scss';
import T from 'i18n-react';
import SymbolWhiteBack from 'assets/imgs/boscoin-symbol-image-white.png';

class KeyGeneratorMessage extends Component {
	render() {
		return (
			<div>
				{!this.props.simple &&
				<div>
					<img src={SymbolWhiteBack} alt={ `${process.env.COIN_NAME} wallet symbol` }/>
				</div>
				}

				<h1>
					{T.translate( 'key_generator.header' )}
				</h1>

				{!this.props.noDescription && <p className="show-desktop-block">
					{T.translate( 'key_generator.description_line1' )}<br/>
					{T.translate( 'key_generator.description_line2' )} <br/>
					{T.translate( 'key_generator.description_line3' )}<br/>
					<span>{T.translate( 'key_generator.description_line4' )}</span>
				</p>}

				<span className="black-line"> </span>
			</div>
		)
	}
}

export default KeyGeneratorMessage;