import React from 'react'
export default class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 3,
            user: {
                firstName: '',
                lastName: '',
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if (name !== 'firstName') {
            this.setState({
                [name]: value
            });
        } else {
            this.setState(prevState => {
                return {
                    ...prevState,
                    user: {
                        ...prevState.user,
                        [name]: value
                    }
                }
            })
        }


    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    You Name
                    <input
                        name="firstName"
                        type="text"
                        value={this.state.user.firstName}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    You Name
                    <input
                        name="lastName"
                        type="text"
                        value={this.state.user.lastName}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}