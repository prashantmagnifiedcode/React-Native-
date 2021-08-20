<div className="content">

        <Card className="root">
      <div>
        <CardMedia
          className="media"
          image="https://i9.ytimg.com/vi/WtospDD4uIQ/mqdefault.jpg?v=61172aa8&sqp=CMzw6IgG&rs=AOn4CLC6yHYfzsCr7X1zpDPawK3f95mtOg"
          title="Contemplative Reptile"
        />
        <div className="cards">
          <h4>
            Amazing Coding
          </h4>
          <p>It will fill you entirely with thrill  and code...............................
#coding attraction ........
          </p>
        </div>
      </div>
      <div  className="bottom" >
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </div>
    </Card>
        <Card className="root">
      <div>
        <CardMedia
          className="media"
          image="https://i9.ytimg.com/vi/WtospDD4uIQ/mqdefault.jpg?v=61172aa8&sqp=CMzw6IgG&rs=AOn4CLC6yHYfzsCr7X1zpDPawK3f95mtOg"
          title="Contemplative Reptile"
        />
        <div className="cards">
          <h4>
            Amazing Coding
          </h4>
          <p>It will fill you entirely with thrill  and code...............................
#coding attraction ........
          </p>
        </div>
      </div>
      <div  className="bottom" >
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </div>
    </Card>
          </div>










          import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light'
}

class App extends React.Component {
    showAlert () {
        mobiscroll.alert({
            title: 'Cellular Data is Turned Off for "Safari"',
            message: 'You can turn on cellular data for this app in Settings.',
            callback: () => {
                mobiscroll.toast({
                    message: 'Alert closed'
                });
            }
        });
    }
    
    showConfirm () {
        mobiscroll.confirm({
            title: 'Use location service?',
            message: 'Help apps determine location. This means sending anonymous location data, even when no apps are running.',
            okText: 'Agree',
            cancelText: 'Disagree',
            callback: (res) => {
                mobiscroll.toast({
                    message: res ? 'Agreed' : 'Disagreed'
                });
            }
        });
    }
    
    showPrompt () {
        mobiscroll.prompt({
            title: 'Sign in to iTunes Store',
            message: 'Enter the Apple ID password for "hello@mobiscroll.com".',
            placeholder: 'Password',
            inputType: 'password',
            callback: (value) => {
                mobiscroll.toast({
                    message: value === null ? 'Cancel was pressed.' : ('The password: ' + value)
                });
            }
        });
    }
    
    render() {
        return (
            <mobiscroll.Form>
                <mobiscroll.FormGroup>
                    <mobiscroll.FormGroupTitle>Alerts</mobiscroll.FormGroupTitle>
                    <div className="mbsc-btn-group-block">
                        <mobiscroll.Button onClick={this.showAlert}>Alert</mobiscroll.Button>
                        <mobiscroll.Button onClick={this.showConfirm}>Confirm</mobiscroll.Button>
                        <mobiscroll.Button onClick={this.showPrompt}>Prompt</mobiscroll.Button>
                    </div>
                </mobiscroll.FormGroup>
            </mobiscroll.Form>
        );
    }    
}