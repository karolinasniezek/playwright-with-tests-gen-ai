/**
* @swagger
* api/boards:
*   post:
*     summary: Create a new board
*     description: Adds a new board.
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               name:
*                 type: string
*               user:
*                 type: integer
*               id:
*                 type: integer
*               starred:
*                 type: boolean
*           required:
*             - name
*     responses:
*       200:
*         description: Board created successfully
*   get:
*     summary: Retrieve all boards
*     description: Fetches public boards and user-specific boards.
*     responses:
*       200:
*         description: A list of boards retrieved successfully.
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*               properties:
*                  id:
*                    type: integer
*                    description: The unique identifier for the board.
*                  title:
*                    type: string
*                    description: The title of the board.
*                  user:
*                    type: integer
*                    description: The ID of the user associated with the board.
*                  created:
*                    type: string
*                    format: date-time
*                    description: The creation date of the board.
*                  starred:
*                    type: boolean
*                    description: Indicates whether the board is starred.
*       404:
*         description: No boards found for the specified user.
*   delete:
*     summary: Delete all boards
*     description: Deletes all boards and associated lists and tasks from the database.
*     responses:
*       204:
*         description: All boards deleted successfully.
* api/boards/{id}:
*   get:
*     summary: Retrieve a specific board by ID
*     description: Fetches a board along with its associated lists and tasks based on the provided board ID.
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: The unique identifier of the board to retrieve.
*         schema:
*           type: integer
*     responses:
*       200:
*         description: A board object with its associated lists and tasks retrieved successfully.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 id:
*                   type: integer
*                   description: The unique identifier for the board.
*                 title:
*                   type: string
*                   description: The title of the board.
*                 user:
*                   type: integer
*                   description: The ID of the user associated with the board.
*                 created:
*                   type: string
*                   format: date-time
*                   description: The creation date of the board.
*                 lists:
*                   type: array
*                   items:
*                     type: object
*                     properties:
*                       id:
*                         type: integer
*                         description: The unique identifier for the list.
*                       title:
*                         type: string
*                         description: The title of the list.
*                       order:
*                         type: integer
*                         description: The order of the list.
*                 tasks:
*                   type: array
*                   items:
*                     type: object
*                     properties:
*                       id:
*                         type: integer
*                         description: The unique identifier for the task.
*                       title:
*                         type: string
*                         description: The title of the task.
*                       completed:
*                         type: boolean
*                         description: Indicates whether the task is completed.
*
*       404:
*         description: Board not found. No board exists with the specified ID.
*   patch:
*      summary: Update a specific board by ID
*      description: Updates a board identified by the provided board ID with new data.
*      parameters:
*        - name: id
*          in: path
*          required: true
*          description: The unique identifier of the board to update.
*          schema:
*            type: integer
*        - name: body
*          in: body
*          required: true
*          description: The updated data for the board.
*          schema:
*            type: object
*            properties:
*              title:
*                type: string
*                description: The new title of the board.
*              description:
*                type: string
*                nullable: true
*                description: The new description of the board (optional).
* 
*      responses:
*        200:
*          description: Board updated successfully.
*          content:
*            application/json:
*              schema:
*                type: object
*                properties:
*                  id:
*                    type: integer
*                    description: The unique identifier for the updated board.
*                  title:
*                    type: string
*                    description: The updated title of the board.
* 
*        404:
*          description: Board not found. No board exists with the specified ID.
*   delete:
*      summary: Delete a specific board by ID
*      description: Deletes a board identified by the provided board ID.
*      parameters:
*        - name: id
*          in: path
*          required: true
*          description: The unique identifier of the board to delete.
*          schema:
*            type: integer
*      responses:
*        204:
*          description: Board deleted successfully.
*        404:
*          description: Board not found. No board exists with the specified ID.
* api/lists:
*   post:
*     summary: Create a new list
*     description: Adds a new list to the board.
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               boardId:
*                 type: integer
*               title:
*                 type: string
*               id:
*                 type: integer
*               created:
*                 type: string
*               order:
*                 type: integer
*             required:
*               - boardId
*               - title
*     responses:
*       200:
*         description: List created successfully
*   delete:
*     summary: Delete all lists
*     description: Deletes all lists and associated tasks from the database.
*     responses:
*       204:
*         description: All lists deleted successfully.
* api/lists/{id}:
*   patch:
*     summary: Update a specific list by ID
*     description: Updates a list identified by the provided list ID with new da
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: The unique identifier of the list to update.
*         schema:
*           type: integer
*       - name: body
*         in: body
*         required: true
*         description: The updated data for the list.
*         schema:
*           type: object
*           properties:
*             title:
*               type: string
*               description: The new title of the list.
*             order:
*               type: integer
*               description: The new order of the list.
*
*     responses:
*       200:
*         description: List updated successfully.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 id:
*                   type: integer
*                   description: The unique identifier for the updated list.
*                 title:
*                   type: string
*                   description: The updated title of the list.
*
*       404:
*         description: List not found. No list exists with the specified ID.
*   delete:
*     summary: Delete a specific list by ID
*     description: Deletes a list identified by the provided list ID.
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: The unique identifier of the list to delete.
*         schema:
*           type: integer
*
*     responses:
*       204:
*         description: List deleted successfully.
*
*       404:
*         description: List not found. No list exists with the specified ID.
*
* api/tasks:
*   post:
*     summary: Create a new task
*     description: Adds a new task to the board by list.
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               boardId:
*                 type: integer
*               listId:
*                 type: integer
*               description:
*                 type: string
*                 nullable: true
*               title:
*                 type: string
*               completed:
*                 type: boolean
*               id:
*                 type: integer
*               created:
*                 type: string
*               deadline:
*                 type: string
*             required:
*               - boardId
*               - listId
*     responses:
*       200:
*         description: Task created successfully
*   delete:
*     summary: Delete all tasks
*     description: Deletes all tasks from the database.
*     responses:
*       204:
*         description: All tasks deleted successfully.
* api/users:
*   get:
*     summary: Retrieve user information
*     description: Fetches the details of the authenticated user based on their ID.
*     security:
*       - apiKey: []  # Assuming you are using an API key for authentication
*     responses:
*       200:
*         description: User information retrieved successfully.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 user:
*                   type: object
*                   properties:
*                     id:
*                       type: integer
*                       description: The unique identifier for the user.
*                     name:
*                       type: string
*                       description: The name of the user.
*                     email:
*                       type: string
*                       description: The email address of the user.
* 
*       401:
*         description: Unauthorized. User is not authenticated.
* 
*       404:
*         description: User not found. No user exists with the specified ID.
*   delete:
*     summary: Delete all users
*     description: Deletes all users from the database.
*     responses:
*       204:
*         description: All users deleted successfully.
* api/reset:
*   post:
*     summary: Reset the database
*     description: Clears all boards, tasks, users, and lists from the database.
*     responses:
*       204:
*         description: Database reset successfully.
* api/upload:
*   post:
*     summary: Upload a file
*     description: Uploads a file and associates it with a task identified by the task ID in the headers.
*     parameters:
*       - name: taskid
*         in: header
*         required: true
*         description: The unique identifier for the task associated with this upload.
*         schema:
*           type: string
*       - name: file
*         in: formData
*         required: true
*         description: The file to upload.
*         type: file
*
*     responses:
*       201:
*         description: File uploaded successfully.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 path:
*                   type: string
*                   description: The path to the uploaded file.
*
*       400:
*         description: Bad Request. The request was invalid or missing required parameters.
*
*       500:
*         description: Internal Server Error. An error occurred while processing the upload.
*/