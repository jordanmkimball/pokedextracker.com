import { padding } from './formatting';

export function htmlName (name) {
  return { __html: name.replace('♀', '<i class="fa fa-venus"></i>').replace('♂', '<i class="fa fa-mars"></i>') };
}

export function iconClass (id, shiny) {
  const idPadded = padding(id, 3);

  if (shiny) {
    return `pkicon pkicon-${idPadded} color-shiny`;
  }
  return `pkicon pkicon-${idPadded} test`;
}

export function regionCheck (pokemon, region) {
  if (region === 'kalos') {
    return Boolean(pokemon.central_kalos_id || pokemon.coastal_kalos_id || pokemon.mountain_kalos_id);
  }
  return Boolean(pokemon[`${region}_id`]);
}
