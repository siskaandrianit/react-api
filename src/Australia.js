import React, { Component } from "react";


class Australia extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
      fetch("https://randomuser.me/api/?results=6&nat=au")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
          {

            id: `${data.id.name}`,
            firstName: `${data.name.first}`,
            lastName: `${data.name.last}`,
            title: `${data.name.title}`,
            email: `${data.email}`,
            username: `${data.login.username}`,
            password: `${data.login.password}`,
            picture: `${data.picture.large}`,

          }
        )))
        .then(items => this.setState({
          items,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }

    render() {
      const {items } = this.state;
        return (
          <div className="boxWhite">
            <h2>Random User</h2>
            {
              items.length > 0 ? items.map(item => {
              const {id,title, firstName, lastName,email,username,password,picture} = item;
               return (

               <div key={id} className="bgCircle">
               <center><img src={picture} alt={firstName} className="circle"/> </center><br />
               <div className="ctr">
                {title} {firstName} {lastName}<br />
               <br/>
               {email}
               <br/>
               {username}
               <br/>
               {password}
                </div>

              </div>
              );
            }) : null
          }
          </div>
        );

    }
  }

export default Australia;