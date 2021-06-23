# sport5-fantasy
Data driven, fantasy football, lineups generator


# Installation

## Download and install anaconda and git
[anaconda](https://docs.anaconda.com/anaconda/install/)

[git](https://git-scm.com/downloads)
  
## Clone this repo
`git clone https://github.com/avshalomd/sport5-fantasy.git`

## Create env and install requirements
`cd sport5-fantasy`

`conda create --name fantasy --file requirements.txt`

`conda activate fantasy`


# Execute

## Run jupyter and execute notebook to create players prediction database
`jupyter notebook generate_players_database.ipynb`

## Execute notebook to generate groups stage lineups
`jupyter notebook generate_group_stage_lineups.ipynb`

## OR execute notebook to generate single match lineup
`jupyter notebook generate_single_match_lineup.ipynb`
