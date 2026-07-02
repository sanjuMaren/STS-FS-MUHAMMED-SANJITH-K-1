# Table of contents

- [Repo preparation](#repo-preparation)
- [Before interview](#before-interview)
- [During the interview](#during-the-interview)
    - [MCQ](#mcq)
    - [Share access repo to the candidate](#share-access-repo-to-the-candidate)
    - [Evaluate the candidate](#evaluate-the-candidate)

# Repo preparation

1. Go to [Safran Transmissions Systems Github Organization](https://github.com/orgs/Safran-Transimission-Systems/repositories)

2. Click `New repository`
![](assets/new-repo.png)
`

3. Type the repo name following the naming convention : `interview_candidate-name`
![alt text](assets/create-repo.png)

4. Get the repo url 
![alt text](assets/repo-url.png)


5. Clone it on your PC

> You need to add Safran proxy in your cmd before to able to dialog wsith GitHub

- Powershell
    ```sh
    $env:https_proxy= 'http://proxysa.rd1.rf1:8080'
    $env:http_proxy= 'http://proxysa.rd1.rf1:8080'
    ```

- Cmd
    ```sh
    set https_proxy=http://proxysa.rd1.rf1:8080
    set http_proxy=http://proxysa.rd1.rf1:8080
    ```

- Bash
    ```sh
    export https_proxy='http://proxysa.rd1.rf1:8080'
    export http_proxy='http://proxysa.rd1.rf1:8080'
    ```

```sh
git clone GitHubRepoUrl
```

![alt text](assets/git-clone.png)

6. Copy / Paste files for interterview into local repo
- [frontend tests](frontend/tests/)
- [fullstack tests](fullstack/tests/)

7. Excute those command lines
```sh
git add .
git commit -m "init repo"
git push
```

you should see the files on remote repo
![alt text](assets/repo-commit.png)


# Before interview
Send email to the candidate **several days before** the interview

- [frontend Mail](frontend/README.md#mail-before-interview)
- [fullstack Mail](fullstack/README.md#mail-before-interview)

# During the interview

## MCQ

Points to note before start of MCQ test:

1.	MCQ form is disabled by default. You will need to Click on “Accept responses” to enable candidates to attempt the exams.
**Make sure that you uncheck and set the form to disabled state after exams are over.** We need to inform HR not to keep 2 interviews at same time.
You all can collaborate on the form by links given below. Candidate scores can be checked from there as well.   
![alt text](assets/MCQ-settings.png)
2.	Before sharing MCQ Test link to candidates you can go to https://expiry.link/links/
3.	Copy paste the Assessment link from below into the temporary link generator field.
![alt text](assets/MCQ-generate-link.png)
4.	Keep the link availability time to 2 minutes. The idea is to prevent candidates to view the MCQ test after we close the interview. The new URL created will expire after 2 mins, however it will not impact continuation of exams.
5.	Share new link generated with the candidates and they attempt MCQ.
6.	Make sure that candidates are sharing their screen and not taking any screenshots or screen recording. There should be no other software running in task bar or task manager that records screen.


Links:
- Collaboration Link to check scores etc : [STS Full Stack Technology Assessment – Collaboration](https://forms.office.com/Pages/DesignPageV2.aspx?rpring=Business&rpsession=3e504d59-46fb-471a-a74c-0a6412cd4d3a&subpage=design&FormId=t0kr1Y8MiU2MT_IFFzBuCF09u9ZpZbFNvbCFz5QErd9UQVRWVVIwSFo0TjVQTlM2N1dNQURINk1VQi4u&Token=938fbff30fa74c9bb429a9eaa9eaf52b)
- Assessment Link : [STS Full Stack Technology Assessment – Fill out form](https://forms.office.com/Pages/DesignPageV2.aspx?rpring=Business&rpsession=3e504d59-46fb-471a-a74c-0a6412cd4d3a&subpage=design&FormId=t0kr1Y8MiU2MT_IFFzBuCF09u9ZpZbFNvbCFz5QErd9UQVRWVVIwSFo0TjVQTlM2N1dNQURINk1VQi4u&Token=938fbff30fa74c9bb429a9eaa9eaf52b)



## Share access repo to the candidate
1. During the interview, go to candidate repo -> Settings -> Collaborators and Teams

   ![alt text](assets/repo-access.png)

2. Click on add people and type the candidate email

   ![alt text](assets/share-repo.png)

3. Candidate will receive an invitation by email. He should click on accept to have access to the repo

Send email to the candidate **several days before** the interview

## Evaluate the candidate

Follow the checks during the interview and take some notes. 

- [frontend Checks](frontend/README.md#checks-during-interview)
- [fullstack Checks](fullstack/README.md#checks-during-interview)

Please send me an email after intervew following this template :

```
Hello,

- Candidate name :
- MCQ Result : %
- GitHub Repo link :
- Your global feed on the candidate :

Checks during interview :
**Copy here the notes**
```
