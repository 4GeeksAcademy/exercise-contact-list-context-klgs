const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			obtenerInfo: async function() {
				try {
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda");
					const data = await response.json();
					setStore({ contacts: data });
					console.log("estoy en flux", data);
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
