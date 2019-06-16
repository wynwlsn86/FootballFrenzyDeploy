class AddLeagueIdToTeams < ActiveRecord::Migration[5.2]
  def change
    add_column :teams, :league_id, :integer
    add_index :teams, :league_id
  end
end
