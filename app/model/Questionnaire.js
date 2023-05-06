 Ext.define('VegaUi.model.Questionnaire', {
   extend: 'Ext.data.Model',

   fields: [
     {name: 'id', type: 'int'},
     {name: 'name', type: 'string'},
     {name: 'questionnaireVersion', type: 'string'},
     {name: 'questionnaireGroupId', type: 'int'},
     {name: 'questionnaireGroupName', type: 'string'},
     {name: 'questionnaireGroupDescription', type: 'string'},
     {name: 'title', type: 'string'},
     {name: 'subTitle', type: 'string'},
     {name: 'searchText', type: 'string'},
     {name: 'canceled', type:'boolean'},

     {name: 'questionnaireType', type:'string', defaultValue:'AOL'},
     {name: 'instructions', type: 'string'},
     {name: 'saveText', type: 'string'},
     {name: 'notes', type: 'string'},

     {name: 'image', type: 'string'},
     {name: 'imageAlt', type: 'string'},
     {name: 'questionnaireProfileId', type: 'int'},
     {name: 'questionnaireProfileDescription', type: 'string'},
     {name: 'compilationTime', type: 'int'},
     {name: 'forcedTerminationTime', type: 'int'},
     {name: 'subjectToEvaluation', type: 'boolean'},
     {name: 'attachments', type: 'int'},

     {name: 'questeditorName', type: 'string'},
     {name: 'questEditor', type: 'string'},

     {name: 'createdBy', type: 'string'},
     {name: 'updatedBy', type: 'string'},
     {name: 'createdDate', type: 'int'},
     {name: 'lastModifiedDate', type: 'int'},
     {name: 'version', type: 'int'}

   ]
 });
