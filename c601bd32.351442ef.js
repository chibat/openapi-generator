(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{254:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return r})),a.d(e,"metadata",(function(){return O})),a.d(e,"rightToc",(function(){return c})),a.d(e,"default",(function(){return i}));var b=a(1),n=a(9),l=(a(0),a(302)),r={title:"Config Options for perl",sidebar_label:"perl"},O={id:"generators/perl",title:"Config Options for perl",description:"| Option | Description | Values | Default |",source:"@site/../docs/generators/perl.md",permalink:"/docs/generators/perl",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/generators/perl.md",lastUpdatedBy:"minenok-tutu",lastUpdatedAt:1588479682,sidebar_label:"perl"},c=[{value:"IMPORT MAPPING",id:"import-mapping",children:[]},{value:"INSTANTIATION TYPES",id:"instantiation-types",children:[]},{value:"LANGUAGE PRIMITIVES",id:"language-primitives",children:[]},{value:"RESERVED WORDS",id:"reserved-words",children:[]},{value:"FEATURE SET",id:"feature-set",children:[{value:"Client Modification Feature",id:"client-modification-feature",children:[]},{value:"Data Type Feature",id:"data-type-feature",children:[]},{value:"Documentation Feature",id:"documentation-feature",children:[]},{value:"Global Feature",id:"global-feature",children:[]},{value:"Parameter Feature",id:"parameter-feature",children:[]},{value:"Schema Support Feature",id:"schema-support-feature",children:[]},{value:"Security Feature",id:"security-feature",children:[]},{value:"Wire Format Feature",id:"wire-format-feature",children:[]}]}],j={rightToc:c};function i(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(l.b)("wrapper",Object(b.a)({},j,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Option"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Values"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ensureUniqueParams"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Whether to ensure parameter names are unique in an operation (rename parameters that are not)."),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"hideGenerationTimestamp"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Hides the generation timestamp when files are generated."),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"moduleName"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Perl module name (convention: CamelCase or Long::Module)."),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OpenAPIClient")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"moduleVersion"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Perl module version."),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"prependFormOrBodyParameters"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Add form or body parameters to the beginning of the parameter list."),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"sortParamsByRequiredFlag"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Sort method arguments to place required parameters before optional parameters."),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"true")))),Object(l.b)("h2",{id:"import-mapping"},"IMPORT MAPPING"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type/Alias"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Imports"))),Object(l.b)("tbody",{parentName:"table"})),Object(l.b)("h2",{id:"instantiation-types"},"INSTANTIATION TYPES"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type/Alias"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Instantiated By"))),Object(l.b)("tbody",{parentName:"table"})),Object(l.b)("h2",{id:"language-primitives"},"LANGUAGE PRIMITIVES"),Object(l.b)("ul",{class:"column-ul"},Object(l.b)("li",null,"ARRAY"),Object(l.b)("li",null,"DateTime"),Object(l.b)("li",null,"HASH"),Object(l.b)("li",null,"boolean"),Object(l.b)("li",null,"double"),Object(l.b)("li",null,"int"),Object(l.b)("li",null,"object"),Object(l.b)("li",null,"string")),Object(l.b)("h2",{id:"reserved-words"},"RESERVED WORDS"),Object(l.b)("ul",{class:"column-ul"},Object(l.b)("li",null,"__end__"),Object(l.b)("li",null,"__file__"),Object(l.b)("li",null,"__line__"),Object(l.b)("li",null,"__package__"),Object(l.b)("li",null,"and"),Object(l.b)("li",null,"cmp"),Object(l.b)("li",null,"continue"),Object(l.b)("li",null,"core"),Object(l.b)("li",null,"do"),Object(l.b)("li",null,"else"),Object(l.b)("li",null,"elsif"),Object(l.b)("li",null,"eq"),Object(l.b)("li",null,"exp"),Object(l.b)("li",null,"for"),Object(l.b)("li",null,"foreach"),Object(l.b)("li",null,"ge"),Object(l.b)("li",null,"gt"),Object(l.b)("li",null,"if"),Object(l.b)("li",null,"le"),Object(l.b)("li",null,"lock"),Object(l.b)("li",null,"lt"),Object(l.b)("li",null,"m"),Object(l.b)("li",null,"ne"),Object(l.b)("li",null,"no"),Object(l.b)("li",null,"or"),Object(l.b)("li",null,"package"),Object(l.b)("li",null,"q"),Object(l.b)("li",null,"qq"),Object(l.b)("li",null,"qr"),Object(l.b)("li",null,"qw"),Object(l.b)("li",null,"qx"),Object(l.b)("li",null,"return"),Object(l.b)("li",null,"s"),Object(l.b)("li",null,"sub"),Object(l.b)("li",null,"tr"),Object(l.b)("li",null,"unless"),Object(l.b)("li",null,"until"),Object(l.b)("li",null,"while"),Object(l.b)("li",null,"xor"),Object(l.b)("li",null,"y")),Object(l.b)("h2",{id:"feature-set"},"FEATURE SET"),Object(l.b)("h3",{id:"client-modification-feature"},"Client Modification Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"BasePath"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Authorizations"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"UserAgent"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")))),Object(l.b)("h3",{id:"data-type-feature"},"Data Type Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Custom"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Int32"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Int64"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Float"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Double"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Decimal"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Byte"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Binary"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Boolean"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Date"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"DateTime"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Password"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"File"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Array"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Maps"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"CollectionFormat"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"CollectionFormatMulti"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Enum"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ArrayOfEnum"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ArrayOfModel"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ArrayOfCollectionOfPrimitives"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ArrayOfCollectionOfModel"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ArrayOfCollectionOfEnum"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MapOfEnum"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MapOfModel"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MapOfCollectionOfPrimitives"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MapOfCollectionOfModel"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MapOfCollectionOfEnum"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")))),Object(l.b)("h3",{id:"documentation-feature"},"Documentation Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Readme"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Model"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Api"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")))),Object(l.b)("h3",{id:"global-feature"},"Global Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Host"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"BasePath"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Info"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Schemes"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"PartialSchemes"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Consumes"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Produces"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ExternalDocumentation"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Examples"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"XMLStructureDefinitions"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MultiServer"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ParameterizedServer"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ParameterStyling"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Callbacks"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"LinkObjects"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")))),Object(l.b)("h3",{id:"parameter-feature"},"Parameter Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Path"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Query"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Header"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Body"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"FormUnencoded"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"FormMultipart"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Cookie"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")))),Object(l.b)("h3",{id:"schema-support-feature"},"Schema Support Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Simple"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Composite"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Polymorphism"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Union"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")))),Object(l.b)("h3",{id:"security-feature"},"Security Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"BasicAuth"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ApiKey"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OpenIDConnect"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"BearerToken"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAuth2_Implicit"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAuth2_Password"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAuth2_ClientCredentials"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAuth2_AuthorizationCode"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")))),Object(l.b)("h3",{id:"wire-format-feature"},"Wire Format Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"JSON"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"XML"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"PROTOBUF"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Custom"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")))))}i.isMDXComponent=!0},302:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return d}));var b=a(0),n=a.n(b);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);e&&(b=b.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,b)}return a}function O(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,b,n=function(t,e){if(null==t)return{};var a,b,n={},l=Object.keys(t);for(b=0;b<l.length;b++)a=l[b],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(b=0;b<l.length;b++)a=l[b],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var j=n.a.createContext({}),i=function(t){var e=n.a.useContext(j),a=e;return t&&(a="function"==typeof t?t(e):O({},e,{},t)),a},p=function(t){var e=i(t.components);return n.a.createElement(j.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},m=Object(b.forwardRef)((function(t,e){var a=t.components,b=t.mdxType,l=t.originalType,r=t.parentName,j=c(t,["components","mdxType","originalType","parentName"]),p=i(a),m=b,d=p["".concat(r,".").concat(m)]||p[m]||u[m]||l;return a?n.a.createElement(d,O({ref:e},j,{components:a})):n.a.createElement(d,O({ref:e},j))}));function d(t,e){var a=arguments,b=e&&e.mdxType;if("string"==typeof t||b){var l=a.length,r=new Array(l);r[0]=m;var O={};for(var c in e)hasOwnProperty.call(e,c)&&(O[c]=e[c]);O.originalType=t,O.mdxType="string"==typeof t?t:b,r[1]=O;for(var j=2;j<l;j++)r[j]=a[j];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);