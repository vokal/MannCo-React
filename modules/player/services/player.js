"use strict";

var PLAYER_URL = "https://tf2stats.vokal.io/v1/players";

var classMap = require( "../values/classMap" );
var destructionAttrs = require( "../values/destructionAttrs" );
var playerAttrs = require( "../values/playerAttrs" );
var tauntAttrs = require( "../values/tauntAttrs" );
var weaponMap = require( "../values/weaponMap" );

function convertPlayerStats( player )
{
  playerAttrs.forEach( attr => player[ attr ] = Number( player[ attr ] ) );
  classMap.forEach( cls => {
    player[ cls.killsAttr ] = Number( player[ cls.killsAttr ] );
    player[ cls.deathsAttr ] = Number( player[ cls.deathsAttr ] );
  } );
  weaponMap.forEach( weapon => player[ weapon.killsAttr ] = Number( player[ weapon.killsAttr ] ) );
  destructionAttrs.forEach( bldg => player[ bldg ] = Number( player[ bldg ] ) );
  tauntAttrs.forEach( taunt => player[ taunt ] = Number( player[ taunt ] ) );

  return player;
}

module.exports = {
  getAll: () => {
    return fetch( PLAYER_URL )
      .then( res => res.json() )
      .then( data => {
        data.results.map( convertPlayerStats );
        return data.results;
      } );
  }
};
