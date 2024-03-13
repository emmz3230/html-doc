---
sidebar_position: 1
---

# Editors to use for Html

A simple text editor is all you need to learn HTML.

## Learn HTML Using Visual studio code

Web pages can be created and modified by using professional HTML editors.

However, for learning HTML I recommend a simple text editor like
Visual studio code.

I believe that using a simple text editor is a good way to learn HTML.

## Installation Process

Follow the steps below to create your first web page with visual studio code.

### Step 1:

Visit the [Visual Studio Code website to download](https://code.visualstudio.com/) to download the latest version of Visual Studio Code.

![vscode screenshot](\img\vsc-screenshot.webp)

### Step 2:

You should see your computer’s operating system displayed, but if it’s not correct, click on the down arrow and find the option that matches your operating system from the drop down menu and click on the down arrow icon under “Stable.”

#### Windows users:

This will download the latest version of Visual Studio Code as an .exe file.

#### Mac users:

This will download the latest version of Visual Studio Code for Mac as a .zip file.

#### Linux users:

.deb and .rpm are different file types for storing data. We suggest you download the .deb file so auto-updates work as the Visual Studio Code documentation suggests.

Once the Visual Studio Code file is finished downloading, we need to install it. Find the Visual Studio Code file in your file manager, the program that lets you see the files and folders on your computer.

#### Windows users:

Open the .exe file by clicking on it and on run the installer. Keep clicking ‘Next’ and then finally ‘Finish.’

#### Mac users:

The downloaded .zip file should be in your ‘Downloads’ folder. Open the file. If you see this message choose “Open.”

#### Linux users:

The downloaded file should be in your ‘Downloads’ folder.

Find it in your file manager, double click and choose ‘Install’ in the GUI software center, or run the following commands, one at a time, in the terminal:

---

sudo dpkg -i downloaded_filename.deb

sudo apt-get install -f

---

Make sure you have your Visual Studio Code application saved in a place you know you will easily be able to find it.
Windows users: It will automatically be placed in your Start menu.

#### Mac users:

Click and drag the Visual Studio Code icon from the Downloads folder to the Applications folder.

#### Linux users:

It should appear in your task bar of programs.

That’s it, you’ve successfully installed your text editor and are ready to start coding!

## What are development folders?

Before using your text editor, it’s important to establish an organized file system. As the number and size of your projects grow, it becomes increasingly important to know where to save new projects and find old projects.

Most developers store their projects in an easy-to-find directory, (what you might be used to calling a ‘folder’). Here, I will recommend naming this directory projects. It will store all of your coding projects. Whenever you create a new project, no matter how small, you should always make a new folder inside your projects directory. You will find that single-file projects can quickly turn into large, multi-folder projects.

### Practice: Let’s make a project

Below are the steps you need to follow to create a new folder for all of your programming projects. You will also learn how to load a new project folder into Visual Studio Code and make your very first “hello world” HTML project.

### 1. Make a development folder.

Navigate to a folder using your file manager or the terminal. Make sure it is a folder you visit regularly and will remember. Create a new folder called projects.

#### Mac users:

This may be your User account or “Home” folder.

#### Windows users:

You may want to save this on your C drive.

#### Linux users:

You may want to save this in your User folder inside of the “Home” folder.

Inside the projects folder, create a new folder called HelloWorld. Everything you add to this folder will be part of your HelloWorld project.

### 2. Open Visual Studio Code

### 3. Open your development folder

Click on the ‘Explorer’ icon on the left hand menu and click on the button ‘Open Folder’ and choose your development folder. This will launch your file manager.

Navigate to the HelloWorld folder and select Open. The folder will open in Visual Studio Code’s side pane. At this point, there should not be any contents in the folder. We’ll add a file in the next step.

### 4. Add a file.

Before you learn how to add files to a project folder, it is important to understand the purpose of file extensions. A file extension is the suffix of a filename (the last 3 or 4 characters in a filename, preceded by a period) and describes the type of content the file contains. For example, the HTML file extension is .html, and it tells the browser (and other applications) to interpret the contents of the file as an HTML document. Once Visual Studio Code loads a project folder, you can add files. The steps below describe how to add files. Don’t worry about doing this on your own computer. We’ll get to that next.

In Visual Studio Code’s Explorer pane, click on your development folder’s name. You’ll see four icons appear to the right of the folder name. Click the ’New File’ icon. Type the new file’s name with its appropriate file extension ( for example, .html, .css, .csv). It is critical that you include the correct file extension, so programs like linters know how to interpret its contents. Press Enter when done.

### 5. Begin coding!

Copy and paste the following boilerplate HTML code:

```html title="index.html"
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Heading</h1>

    <p>My first paragraph.</p>
  </body>
</html>
```

![First Heading](\img\first-heading.PNG)

Save your file often with the Auto Save feature and track changes with a version control system if you know how to use one. (To turn Auto Save on, click on ‘File’ then ‘Auto Save’. When it’s on, you’ll see a check mark next to ‘Auto Save’.) This will decrease the chances of losing unsaved work.

#### File Extensions and Syntax Highlighting

Syntax is the set of rules that tell us how to create correctly written code. Visual Studio Code and other text editors are able to interpret file extensions and provide language-specific syntax highlighting. Syntax highlighting is a tool for making code easier to read. Take a look at your index.html file. The text and tags are different colors. This is how Visual Studio Code highlights .html syntax. With each new language you learn, Visual Studio Code will highlight text in a way that makes your code easy to read. This may be different than other text editors and also different than the way your code is highlighted .

#### Optional: Change the color scheme

Although Visual Studio Code comes with default syntax highlighting, you may want to change the colors used. Good color themes will make reading all those lines of code easy on your eyes. (Try out low contrast, dark themes like “Solarized Dark” or “Dracula Dark.”)

To do this, select Color Theme from the Welcome page when you first open Visual Studio Code, or click on Code in the menu bar at the top of your desktop window, then click on Preferences, followed by Color Theme. You can also search for color themes to install using the Extensions menu .

6. View your HTML file in the browser
   At this point, your file is ready to be viewed in a web browser. The following steps should be taken outside of Visual Studio Code:

Navigate to the index.html file in your Hello World folder through your file manager or terminal.

Double click or open index.html. The page should open in your default web browser. Take second to marvel at your handiwork—you made your first project with Visual Studio Code.
