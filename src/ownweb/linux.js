import React from "react";
const Linuxs = () => {
    return(
  <> <div className="linux">
      <div className="imgslinux">
          <div className="imgs1">

          </div>
      </div>
    <div >
      <h3>LINUX COMMAND LINE</h3>
    </div>
    <div>
      <div>
        <h3>pwd command</h3>
        <p>
          Use the pwd command to find out the path of the current working
          directory (folder) you’re in. The command will return an absolute
          (full) path, which is basically a path of all the directories that
          starts with a forward slash (/). An example of an absolute path is
          /home/username.
        </p>
      </div>
      <div>
        <h3>cd command</h3>

        <p>
          Let’s say you’re in /home/username/Documents and you want to go to
          Photos, a subdirectory of Documents. To do so, simply type the
          following command: cd Photos.
        </p>
        <p>
          There are some shortcuts to help you navigate quickly:
          <ul>
            cd .. (with two dots) to move one directory up cd to go straight to
            the home folder cd- (with a hyphen) to move to your previous
            directory
          </ul>
        </p>
      </div>
     <div>
         <h3>ls command</h3>
         <p>
         If you want to see the content of other directories, type ls and then the directory’s path. For example, enter ls /home/username/Documents to view the content of Documents
         </p>
         <p>
         There are variations you can use with the ls command:

      <li> ls -R will list all the files in the sub-directories as well</li>
      <li>ls -a will show the hidden files</li>
      <li>ls -al will list the files and directories with detailed information like the permissions, size, owner, etc.</li>
         </p>
     </div>
     <div>
         <h3>cat command</h3>
         <h4>It is used to list the contents of a file on the standard output (sdout).</h4>
         <p>
  <ul>
      

  <li> cat  filename creates a new file</li>
  <li>cat filename1 filename2 filename3 joins two files (1 and 2) and stores the output of them in a new file (3)</li>
  <li>to convert a file to upper or lower case use, cat filename | tr a-z A-Z  output.txt</li>
      
  </ul>
         </p>
     </div>
     <div>
         <h4>cp command</h4>
         <p>the cp command to copy files from the current directory to a different directory.</p>
         <p>the command cp scenery.jpg /home/username/Pictures would create a copy of scenery.jpg (from your current directory) into the Pictures directory</p>
     </div>
     <div>
         <h3>mv command</h3>
         <p>
         The arguments in mv are similar to the cp command. You need to type mv, the file’s name, and the destination’s directory. For example: mv file.txt /home/username/Documents.
         </p>
         <h4>To rename files, the Linux command is mv oldname.ext newname.ext</h4>
     </div>
     <div>
         <h3>mkdir command</h3>
         <p>Use mkdir command to make a new directory — if you type mkdir Music it will create a directory called Music.</p>
         <p>To generate a new directory inside another directory, use this Linux basic command mkdir Music/Newfile
use the p (parents) option to create a directory in between two existing directories. For example, mkdir -p Music/2020/Newfile will create the new “2020” file.</p>
     </div>
     <div>
         <h3>rmdir command</h3>
         <p>you need to delete a directory, use the rmdir command. However, rmdir only allows you to delete empty directories</p>
     </div>
     <div>
         <h3>rm command</h3>
         <p>The rm command is used to delete directories and the contents within them. If you only want to delete the directory — as an alternative to rmdir — use rm -r.</p>
     </div>
     <div>
         <h3>touch command</h3>
         <p>The touch command allows you to create a blank new file through the Linux command line. As an example, enter touch /home/username/Documents/Web.html to create an HTML file entitled Web under the Documents directory.</p>
     </div>
     <div>
         <h3>find command</h3>
         <p>using find also searches for files and directorie</p>
     </div>
     <div>
         <h3>sudo command</h3>
         <p> “SuperUser Do”, this command enables you to perform tasks that require administrative or root permissions. However, it is not advisable to use this command for daily use because it might be easy for an error to occur if you did something wrong.</p>
     </div>
     <div>
         <h3>df command</h3>
         <p>Use df command to get a report on the system’s disk space usage, shown in percentage and KBs. If you want to see the report in megabytes, type df -m.</p>
     </div>
     <div>
         <h3>du command</h3>
         <p>If you want to check how much space a file or a directory takes, the du (Disk Usage) command is the answer</p>
     <p>If you want to see it in bytes, kilobytes, and megabytes, add the -h argument to the command line</p>
     </div>
     <div>
         <h3>
         head command
         </h3>
         <h4>The head command is used to view the first lines of any text file. </h4>
         <p>By default, it will show the first ten lines, but you can change this number to your liking. For example, if you only want to show the first five lines, type head -n 5 filename.ext.</p>
     </div>
     <div>
         <h3>tail command</h3>
         <p>This one has a similar function to the head command, but instead of showing the first lines, the tail command will display the last ten lines of a text file. For example, tail -n filename.ext.

</p>
     </div>
     <div>
         <h3>diff command</h3>
         <p>the diff command compares the contents of two files line by line. After analyzing the files, it will output the lines that do not match.</p>
     </div>
     <div>
         <h3>tar command</h3>
         <p>The tar command is the most used command to archive multiple files into a tarball — a common Linux file format that is similar to zip format, with compression being optional.</p>
     </div>
     <div>
         <h3>chmod command</h3>
         <p>chmod is another Linux command, used to change the read, write, and execute permissions of files and directories.</p>
     </div>
     <div>
         <h3>chown command</h3>
         <p>The chown command enables you to change or transfer the ownership of a file to the specified username. For instance, chown linuxuser2 file.ext will make linuxuser2 as the owner of the file.ext.</p>
     </div>
     <div>
         <h3>ping command</h3>
         <p> the ping command to check your connectivity status to a server. For example, by simply entering ping google.com, the command will check whether you’re able to connect to Google and also measure the response time.</p>
     </div>
     <div>
         <h3>wget command</h3>
         <p>The Linux command line is super useful — you can even download files from the internet with the help of the wget command. To do so, simply type wget followed by the download link</p>
     </div>
     <div>
        <h3>history command</h3>
        <p>When you’ve been using Linux for a certain period of time, you’ll quickly notice that you can run hundreds of commands every day. As such, running history command is particularly useful if you want to review the commands you’ve entered before.</p>
     </div>
     <div>
         <h3>echo command</h3>
         <p>This command is used to move some data into a file. For example, if you want to add the text, “Hello, my name is John” into a file called name.txt, you would type echo Hello, my name is John  name.txt</p>
     </div>

    </div>
  </div>
  </>
)};
export default Linuxs
