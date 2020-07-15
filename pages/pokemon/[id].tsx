import React from 'react';

import Link from 'next/link';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { Container } from '../styles/pokemon';
import api from '../../services/api';
import Header from '../../components/Header';

interface Props {
  pokemon: Pokemon;
}

interface Pokemon {
  entry_number: number;
  name: string;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await api.get(`/pokemon/${params.id}`);

  const pokemon = response.data;

  return {
    props: {
      pokemon,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get('/pokedex/2');

  const pokemons = response.data.pokemon_entries;

  const paths = pokemons.map((pokemon: Pokemon) => ({
    params: { id: pokemon.entry_number.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

const Pokemon: NextPage<Props> = ({ pokemon }) => {
  return (
    <Container>
      <Header />
      <div>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt="pokemon-front" />
        <img src={pokemon.sprites.front_shiny} alt="pokemon-shiny" />

        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Pokemon;
