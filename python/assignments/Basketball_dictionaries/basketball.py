class Player:
    def __init__(self, players):
        self.name = players['name']
        self.age = players['age']
        self.position = players['position']
        self.team = players['team']
     
    # @classmethod
    # def createTeam(cls, players):
    #     team = []
    #     for player in players:
    #         # print(player)
    #         new_object = cls(player)
    #         print(new_object)
    #     #     team.append(new_object)
    #     # print(team)

    @classmethod
    def createTeam(cls,players):
        team = []
        for player in players:
            for key,val in player.items():
                print(f"{key}: {val}")
            print('--------------------------')

players = [
    {
    	"name": "Kevin Durant", 
    	"age":34, 
    	"position": "small forward", 
    	"team": "Brooklyn Nets"
    },
    {
    	"name": "Jason Tatum", 
    	"age":24, 
    	"position": "small forward", 
    	"team": "Boston Celtics"
    },
    {
    	"name": "Kyrie Irving", 
    	"age":32, "position": "Point Guard", 
    	"team": "Brooklyn Nets"
    },
    {
    	"name": "Damian Lillard", 
    	"age":33, "position": "Point Guard", 
    	"team": "Portland Trailblazers"
    },
    {
    	"name": "Joel Embiid", 
    	"age":32, "position": "Power Foward", 
    	"team": "Philidelphia 76ers"
    },
    {
    	"name": "", 
    	"age":16, 
    	"position": "P", 
    	"team": "en"
    }
]
player = {
    	"name": "Kevin Durant", 
    	"age":34, 
    	"position": "small forward", 
    	"team": "Brooklyn Nets"
    }

# Player.createTeam(players)

kevin = Player(players[0])
jason = Player(players[1])
kyrie = Player(players[2])

# kevin = Player(player)
# print(players)
team = []
for player in players:
    # print(player)
    new_object = Player(player)
    # print(new_object)
    team.append(new_object)
    print(team)