import Formsy from 'formsy-react';

  const MyOwnInput = React.createClass({

    mixins: [Formsy.Mixin],

    changeValue(event) {
      this.setValue(event.currentTarget.value);
    },

    render() {
        
      const className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;
        
      const errorMessage = this.getErrorMessage();
      
      const { maxLength, type } = this.props;    
        
      return (
        <div className={className + ' ' + this.props.className}>
          <input type={type} 
                 onChange={this.changeValue} 
                 value={this.getValue()}
                 maxLength={maxLength}       
                 
          />
          <span>{errorMessage}</span>
        </div>
      );
    }
  });