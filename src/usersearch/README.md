# UserSearch

Component for searching users

## Props
Name | Type | Description | Required
--- | --- | --- | ---
policies | custom | List of policies |  
onQueryChange | func | Callback function fired when the search query changes |  
onUserSelect | func | Callback function fired when a user is selected |  
onNotFoundAction | func | Callback function fired when a “User not found” button is clicked |  
onLockedAction | func | Callback function fired when interacting with locked component (`props.locked == true`) |  
queryUsers | func | Function implementing the logic of searching users (takes a query & returns value or promise) |  
excludedUsers | arrayOf | Users to exclude from the search results (by `id` property) |  
travelersCount | number | Number of travelers added to a trip |  
locked | bool | If `true` the interaction is blocked (on focus of query input) |  


