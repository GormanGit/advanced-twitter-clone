let user1 = {
    "firstName": "Luke ",
    "lastName": "Skywalker",
    "userName": "userMan",
    "tweets": "77",
    "followers": "10",
    "following": "1",
    "imgUrl": "http://....",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.co/api/planets/1/",
};
let t = "this is the title that I want to show";
let App = React.createElement("div", null, <Header />,<Profile title = {t} user={user1}/>,<Tweets />);




//Passing grandparent to grandchild info is at teh 22nd minute of the third video of "day1 on gethub page"



// function App(){
//   return <div><Main /></div>
// }