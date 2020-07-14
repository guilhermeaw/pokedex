import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Container, PokeList, PokeBox } from './styles';

import Layout from '../components/Layout';

import api from '../services/api';

interface Props {
  pokemons: Pokemon[];
}

interface Pokemon {
  entry_number: number;
  pokemon_species: {
    name: string;
  };
  sprites: {
    front_default: string;
  };
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/pokedex/2');

  const pokemons = response.data.pokemon_entries;

  return {
    props: {
      pokemons,
    },
  };
};

const Home: React.FC<Props> = ({ pokemons }) => {
  return (
    <Layout>
      <Container>
        <PokeList>
          <ul>
            {pokemons.map(pokemon => (
              <Link
                key={pokemon.entry_number}
                href={`/pokemon/${pokemon.entry_number}`}
              >
                <a>
                  <li>
                    <PokeBox>
                      <h1>{pokemon.pokemon_species.name}</h1>
                      <img
                        src={`/sprites/${pokemon.entry_number}.png`}
                        alt={pokemon.pokemon_species.name}
                      />
                    </PokeBox>
                  </li>
                </a>
              </Link>
            ))}
          </ul>
        </PokeList>
      </Container>
    </Layout>
  );
};

export default Home;
