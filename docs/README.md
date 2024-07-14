# fullstack_developer_capstone
A car dealership website ([Full Stack Application Development Capstone Project](https://www.coursera.org/learn/ibm-cloud-native-full-stack-development-capstone), part of [IBM Full Stack Software Developer Professional Certificate](https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer)).

# What does the project do?
The project is a car dealership website that allows new and existing customers to look up different branches by state and look at customer reviews of the various branches.

# Why is the project useful?
As part of the certificate, I learnt a full stack of software development technologies. The project is an opportunity to use most of these technologies together in the same application.

# How can users can get started with the project?
You can run the application in [an IBM Skills Network lab environment](https://skills.network).

## Steps
### Clean-up
1. Delete previously persisting sessions: `kubectl delete deployment dealership`

`ibmcloud cr image-rm us.icr.io/sn-labs-<your username>/dealership:latest && docker rmi us.icr.io/sn-labs-<your username>/dealership:latest`

2. Sign out of SN Labs and clear your browser cache and cookies.
3. Start the lab again and proceed as below.

### MongoDB server
1. Clone this repository: `git clone https://github.com/nathandeflavis/fullstack_developer_capstone.git`
2. Change to the `server/database` directory: `cd /home/project/fullstack_developer_capstone/server/database`
3. Start the Node-Mongo server: `cd /home/project/fullstack_developer_capstone/server/database`

`docker build . -t nodeapp`

`docker-compose up`

4. Launch the app on Port 3030.
5. In `djangoapp/.env`, set `backend_url` to the app's URL without `/` at the end.

### Code Engine
1. In **Skills Network Toolbox** > **Cloud** > **Code Engine**, click **Create Project**.
2. Click **Code Engine CLI**.
3. Change to the `server/djangoapp/microservices` directory: `cd /home/project/fullstack_developer_capstone/server/djangoapp/microservices`
4. Build the sentiment analyser app: `docker build . -t us.icr.io/${SN_ICR_NAMESPACE}/senti_analyzer`
5. Push the docker image: `docker push us.icr.io/${SN_ICR_NAMESPACE}/senti_analyzer`
6. Deploy the senti_analyzer application on code engine: `ibmcloud ce application create --name sentianalyzer --image us.icr.io/${SN_ICR_NAMESPACE}/senti_analyzer --registry-secret icr-secret --port 5000`
7. The URL that is generated is the base URL. Visit `<base URL>/analyze/Fantastic services` in the browser to ensure that it returns `positive`.
8. In `djangoapp/.env`, set 'sentiment_analyzer_url' to <base URL> with `/` at the end.

### Front-end
1. In a new terminal, change to the `server/frontend` directory: `cd /home/project/fullstack_developer_capstone/server/djangoapp`
2. Install the required packages: `npm install`
3. Build the app front-end: `npm run build`

### Sentiment Analysis microservice
1. In a new terminal, change to the `server` directory: `cd /home/project/fullstack_developer_capstone/server`
2. Export your SN Labs namespace: `MY_NAMESPACE=$(ibmcloud cr namespaces | grep sn-labs-)`
3. Build the image container registry: `docker build -t us.icr.io/$MY_NAMESPACE/dealership .`
4. Push the image container registry: `docker push us.icr.io/$MY_NAMESPACE/dealership`
5. Create the deployment: `kubectl apply -f deployment.yaml`
6. Use port-forwarding in this environment to see the running application, repeating the step if necessary: `kubectl port-forward deployment.apps/dealership 8000:8000`
7. Launch the app on Port 8000.

# Where can users can get help with the project?
Users can contact the project's maintainers and contributors for help.

# Who maintains and contributes to the project?
@nathandeflavis

README adapted from [GitHub Docs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes).
