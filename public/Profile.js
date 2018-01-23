// let Profile = React.createElement("h1",null,"This is the user Profile");


function Profile (props){
    /*

lets props ={
 user : {
    firstName: 'Jon',
    lastName:  'Gorman',
    userName: 'JGorman',
    tweets: 4,
    following: 77;
    followers: 1
    imgUrl: ""
    }
}
     */
    return (

        <div>
            <Header title = {props.title} />
            First Name: {props.user.firstName} Last Name: {props.user.lastName}
            UserName: {props.user.userName}
            Tweets: {props.user.tweets}
            Following: {props.user.following}
            Followers: {props.user.followuser}
            Image: {props.user.imgUrl}
        </div>

    )

}