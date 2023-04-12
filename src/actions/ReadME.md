# What is an Action in Redux
1. Action return an object that can contain two keys, (1) type (2) payload (optional)
2. Based on the Action type, the value of the state will be changed. 

# Keep in mind that
1. A Default Case is neccessary for the action type which does not exist to prevent App from breaking.