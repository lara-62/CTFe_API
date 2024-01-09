const express = require('express');

const router = express.Router();

/**
 * @swagger
 * tags:
 *     name: Contest
 *  
 */

/**
 * @swagger
 * paths:
 *  /contest:
 *    get:
 *       tags:
 *       - "Contest"
 *       summary: "Get Contests of this site"
 *       produces:
 *       - "application/json"
 *       parameters:
 *       - name: "status"
 *         in: "query"
 *         description: "status of the contest"
 *         type: "array"
 *         content:
 *              text/plain:
 *                 schema:
 *                   type: array
 *                   items:
 *                      type: "string"
 *                      enum:
 *                      - "all"
 *                      - "past"
 *                      - "running"
 *                      - "upcoming"
 *                      default: "all"
 *         collectionFormat: "multi"
 *       - name: "type"
 *         in: "query"
 *         description: "type of the contest"
 *         type: "array"
 *         content:
 *              text/plain:
 *                 schema:
 *                   type: array
 *                   items:
 *                      type: "string"
 *                      enum:
 *                      - "all"
 *                      - "private"
 *                      - "offcial"
 *                      - "myparticipated"
 *                      - "my organized"
 *                      default: "all"
 *         collectionFormat: "multi"
 *       responses:
 *           200:
 *             description: "successful"
 *             content:
 *                application/json:
 *                     schema:
 *                        $ref: '#/components/schemas/User'  
 *           404:
 *            description: "Catagory not found"
 *  /contest/{contestId}:
 *    get:
 *       tags:
 *       - "Contest"
 *       summary: "Returns a specific contest details"
 *       produces:
 *       - "application/json"
 *       parameters:
 *       - name: "contestId"
 *         in: "path"
 *         description: "contestId of the contest to get"
 *         required: true
 *         type: "string"
 *       responses:
 *           200:
 *             description: "successful"
 *             content:
 *                application/json:
 *                     schema:
 *                        $ref: '#/components/schemas/User'
 *           400:
 *            description: "Invalid contestid supplied"
 *           404:
 *            description: "No contest with this id"
 *  /contest/{contestId}/Enter:
 *      get:
 *         tags:
 *         - "Contest"
 *         summary: "Enter to the contest"
 *         produces:
 *         - "application/json"
 *         parameters:
 *         - name: "contestId"
 *           in: "path"
 *           description: "contestId of the contest to Enter"
 *           required: true
 *           type: "string"
 *         - name: "type"
 *           in: "query"    
 *           description: "type of the contest"
 *           required: true
 *           content:
 *             text/plain:
 *              schema:
 *                 type: "string"
 *                 enum:
 *                 - "live"
 *                 - "virtual"
 *         responses:
 *           200:
 *             description: "successful"
 *             content:
 *                application/json:
 *                     schema:
 *                        $ref: '#/components/schemas/User'
 *           400:
 *              description: "Invalid contestid supplied"
 *           404:
 *              description: "No contest with this id"     
 *  /contest/{contestId}/Challenges:
 *      get:
 *         tags:
 *         - "Contest"
 *         summary: "Returns all the problems of the contest"
 *         produces:
 *         - "application/json"
 *         parameters:
 *         - name: "contestId"
 *           in: "path"
 *           description: "contestId of the contest"
 *           required: true
 *           type: "string"
 *         responses:
 *           200:
 *             description: "successful"
 *             content:
 *                application/json:
 *                     schema:
 *                        $ref: '#/components/schemas/User'
 *           400:
 *              description: "Invalid contestid supplied"
 *           404:
 *              description: "No contest with this id"                  
*/
