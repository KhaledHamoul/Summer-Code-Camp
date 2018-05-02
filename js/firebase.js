     // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCkQ1KyStLf39DIEP7F4aNbF-X5LUin62k",
    authDomain: "summer-code-camp.firebaseapp.com",
    databaseURL: "https://summer-code-camp.firebaseio.com",
    projectId: "summer-code-camp",
    storageBucket: "summer-code-camp.appspot.com",
    messagingSenderId: "104187889646"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
  
  // set new project
   function newProject(){
       var key = firebase.database().ref('Projects').push().key;
         
              database.ref('Projects/' + key).set({
                                nameProject: "Team App",
                                photo: "/",
                                summary : "team app tha thelp team members to comunicat with each other " ,
                                mentor: "Khaled HAMOUL" ,
                                skills: "ionic , php " ,
                                spec: "/"
                               
                            });

   }

   // register a participant
   function newParticipant(){
        var key = firebase.database().ref('participants').push().key;
        
        var firstName = document.getElementById('first-name').value;
        var name = document.getElementById('family-name').value;
        var email = document.getElementById('email').value;
        var school = document.getElementById('school').value; 
        var level = document.getElementById('study-level').value;
        var motivation = document.getElementById('motivation').value;
        var skills = document.getElementById('skills').value;
        var facebook = document.getElementById('facebook').value;
        var github = document.getElementById('github').value;
        var linkedin = document.getElementById('linkedin').value;

        var succedAlert = document.getElementById('success');
        if((firstName != "")&&(name != "")&&(email != "")&&(school != "")&&(level != "")&&(motivation != "")&&(skills != ""))
              database.ref('participants/' + key).set({
                                firstName: firstName,
                                famillyName: name,
                                email : email,
                                school: school ,
                                level: level ,
                                motivation: motivation,
                                skills: skills,
                                facebook:facebook,
                                github: github,
                                linkedin: linkedin
                               
                            }).then(function(){
                                
                                succedAlert.innerHTML = `<div  class="alert alert-success alert-dismissible fade show" ><strong>Congratulations ! </strong>You're now registered, stay tuned for the confirmation.
                                                         <button type="button" class="close" data-dismiss="alert">&times;</button>
                                                        </div>` ;
                                
                            }).catch(function(){
                                 succedAlert.innerHTML = `<div  class="alert alert-danger alert-dismissible fade show" ><strong>Error ! </strong>try to register again.
                                                         <button type="button" class="close" data-dismiss="alert">&times;</button>
                                                        </div>` ;
                            });

   }

    // register a mentor
   function newMentor(){
        var key = firebase.database().ref('Mentors').push().key;
        
        var firstName = document.getElementById('first-name').value;
        var name = document.getElementById('family-name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var school = document.getElementById('school').value; 
        var level = document.getElementById('study-level').value;
        var motivation = document.getElementById('motivation').value;
        var skills = document.getElementById('skills').value;
        var facebook = document.getElementById('facebook').value;
        var github = document.getElementById('github').value;
        var linkedin = document.getElementById('linkedin').value;
        
        var succedAlert = document.getElementById('success');
        
        if((firstName != "")&&(name != "")&&(email != "")&&(school != "")&&(level != "")&&(motivation != "")&&(skills != ""))
        
              database.ref('Mentors/' + key).set({
                                firstName: firstName,
                                famillyName: name,
                                email : email,
                                phone: phone,
                                school: school ,
                                level: level ,
                                motivation: motivation,
                                skills: skills,
                                facebook:facebook,
                                github: github,
                                linkedin: linkedin
                               
                            }).then(function(){
                                
                                succedAlert.innerHTML = `<div  class="alert alert-success alert-dismissible fade show" ><strong>Congratulations ! </strong>You're now registered, stay tuned for the confirmation.
                                                         <button type="button" class="close" data-dismiss="alert">&times;</button>
                                                        </div>` ;
                                
                            }).catch(function(){
                                 succedAlert.innerHTML = `<div  class="alert alert-danger alert-dismissible fade show" ><strong>Error ! </strong>try to register again.
                                                         <button type="button" class="close" data-dismiss="alert">&times;</button>
                                                        </div>` ;
                            });

   }

    var listProjects = document.getElementById('projectsList');
    var listProjectsModals = document.getElementById('projectModals');
    
    // get all projects 
    function setProjects(){
        
        var ref = database.ref('Projects');

        ref.on('value', function(snapshot) {
        var projectsHTML = "";
        var projectModalsHTML = "";
        var i = 0 ;
        snapshot.forEach(function(childSnapshot) {
                var child = childSnapshot.val();
                projectsHTML += `<!-- Project -->
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal`+ i +`">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="`+ child.photo + `" style="width:100%;height:280px" alt="">
            </a>
            <div class="portfolio-caption">
              <h4>`+ child.nameProject  + `</h4>
              <p class="text-muted">somthing to put here!</p>
            </div>
          </div>`;

          projectModalsHTML += ` <!-- Modal 1 -->
          <div class="portfolio-modal modal fade" id="portfolioModal`+ i  + `" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                  <div class="lr">
                    <div class="rl"></div>
                  </div>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col-lg-8 mx-auto">
                      <div class="modal-body">
                        <!-- Project Details Go Here -->
                        <h2 class="text-uppercase">` + child.nameProject + `</h2>
                        <p class="item-intro text-muted"></p>
                        <img src="`+ child.photo + `"  class="img-fluid d-block mx-auto"  alt="">
                        <p>` + child.summary + `</p>
                        <ul class="list-inline" >
                          <li><b>MENTOR : &nbsp</b> ` + child.mentor + ` </li>
                          <li><b>SKILLS : &nbsp</b> ` + child.skills + ` </li>
                        </ul>
                        <button onclick="downloadFile(`+ child.projectName +`)"  style="width:22%;margin-left:4px" class="btn btn-primary" type="button">
                          <i class="fa fa-download"></i>
                          Download</button>
                          
                          <br>
                          
                        <button style="width:22%;margin-top:5px" class="btn btn-primary" data-dismiss="modal" type="button">
                          <i class="fa fa-times"></i>
                          Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
          
          i++;  
        });

        listProjects.innerHTML = projectsHTML; 
        listProjectsModals.innerHTML = projectModalsHTML;
      });



    }

    setProjects();
   
    // download le cahier des charges 
    function downloadFile(projectName){

                        
                            var ref = firebase.storage();
                            ref.ref('cahiers/'+ projectName + '.pdf').getDownloadURL().then(function(url) {
                            // `url` is the download URL for 'images/stars.jpg'
                            
                            var link = document.createElement("a");
                            link.download = projectName;
                            link.href = url;
                            link.click();
                            
                            }).catch(function(error) {
                            // Handle any errors
                            alert("error while downloading");
                            });
                        
    }

    // contact us 
    function sendMail() {
        var email = document.getElementById('email').value;
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        var msg = document.getElementById('message').value;
        if (( email != "")&&( name != "")&&( phone != "")&&( msg != "")){
            Email.send(email ,"fm_khodja@esi.dz","SUMMER CODE CAMP","NAME: " + name + "<br>MESSAGE:" + msg,"smtp.elasticemail.com","fk_hamoul@esi.dz","6c52b539-01b6-4ac3-bfd0-c2380774350b");
        // alert('sent');
        }
    }


