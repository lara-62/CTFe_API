const express = require('express');

const router = express.Router();

/**
 * @swagger
 * tags:
 *     name: Users
 *  
 */

/**
 * @swagger
 * paths:
 *  /users/profile/{username}:
 *    get:
 *       tags:
 *       - "Users"
 *       summary: "Get user by user name"
 *       produces:
 *       - "application/json"
 *       parameters:
 *       - name: "username"
 *         in: "path"
 *         description: "unique username of the user to get"
 *         required: true
 *         type: "string"
 *       responses:
 *           200:
 *             description: "successful"
 *             content:
 *                application/json:
 *                     schema:
 *                        $ref: '#/components/schemas/User'
 *                
 *           400:
 *            description: "Invalid username supplied"
 *           404:
 *            description: "User not found"
*/

/** 
 * @swagger
 * components:
 *  schemas:
 *     User:
 *      type: object
 *      required:
 *      - username
 *      - email
 *      - password
 *      properties:
 *          username:
 *             type: string
 *             description: username for the user
 *             example: lara
 *          email:
 *             type: string
 *             description: email for the account
 *             example: lara62@gmail.com
 *          password:
 *             type: string
 *             description: password for the account
 *             example: 123456
 *             minimum: 8
 *          Firstname:
 *             type: string
 *             example: lara
 *          Lastname:
 *              type: string
 *              example: khanom
 *          location:
 *              type: string
 *              example: Dhaka,Bangladesh
 *          joined:
 *              type: string       
 *              example: 2021-01-01
 *          Rating:
 *              type: Integer
 *              example: 500
 *          Global standing:
 *              type: Integer
 *              example: 12
 *     Problem:
 *        type: object
 *        required:
 *        - title
 *        properties:
 *             title:
 *                type: string
 *                description: title for the problem
 *                example: find the flag
 *             description:
 *                type: string
 *                description: description for the problem 
 *             contest:   
 *               type: string
 *               description: in which contest this problem appeared on
 *             date:
 *               type: string
 *               description: date when the problem was published or the contest hold
 */