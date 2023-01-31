import{i as r}from"./chunks/useMermaid.b09ae745.js";import{e as a,o as e,c as t,a as n,t as i,u as d,d as m}from"./app.16583731.js";const s=`erDiagram\r
    storey_types {\r
        char id PK\r
        varchar name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    notifications {\r
        char id PK\r
        varchar type \r
        varchar notifiable_type \r
        char notifiable_id \r
        text data \r
        timestamp read_at \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    form_coc_work_type_list {\r
        char id PK\r
        varchar name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    sales_pipeline_sources {\r
        char id PK\r
        char parent_id \r
        varchar name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    equipment_brands {\r
        char id PK\r
        varchar name \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    form_coc_type_list {\r
        char id PK\r
        varchar name \r
        varchar display_name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    projects_pipeline_item_categories {\r
        char id PK\r
        varchar name \r
        varchar display_name \r
        varchar description \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    equipment_models {\r
        char id PK\r
        char created_by_id FK\r
        char category_id FK\r
        char sub_category_id FK\r
        char brand_id FK\r
        varchar name \r
        varchar description \r
        varchar warranty_sheet \r
        varchar data_sheet \r
        int voc \r
        int isc \r
        decimal temperature_coefficient \r
        int wattage \r
        text instructions \r
        text manual \r
        int min_stock_quantity \r
        timestamp created_at \r
        timestamp updated_at \r
        timestamp archived_at \r
    }\r
\r
    compass_point_types {\r
        char id PK\r
        varchar name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    orientation_types {\r
        char id PK\r
        varchar name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    timesheet_types {\r
        char id PK\r
        varchar name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    media_categories {\r
        char id PK\r
        varchar name \r
        varchar display_name \r
        varchar description \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    pipelines {\r
        char id PK\r
        varchar name \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    suppliers {\r
        char id PK\r
        varchar name \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    task_categories {\r
        char id PK\r
        char parent_id \r
        varchar name \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    phase_types {\r
        char id PK\r
        varchar name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    sales_pipeline_products {\r
        char id PK\r
        varchar name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    titles {\r
        char id PK\r
        varchar name \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    roles {\r
        char id PK\r
        varchar name \r
        varchar display_name \r
        varchar description \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    form_coc_reference_standard_list {\r
        char id PK\r
        varchar name \r
        varchar display_name \r
        varchar description \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    difficulty_types {\r
        char id PK\r
        varchar name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    addresses {\r
        char id PK\r
        char created_by_id FK\r
        varchar street \r
        varchar city \r
        varchar state \r
        varchar country_iso \r
        varchar postal_code \r
        double lat \r
        double lng \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    form_coc_compliance_checkbox_list {\r
        char id PK\r
        varchar name \r
        varchar description \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    form_coc_grid_type_list {\r
        char id PK\r
        varchar name \r
        varchar display_name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    form_coc_work_risk_list {\r
        char id PK\r
        varchar name \r
        varchar display_name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    sales_pipeline_item_closed_categories {\r
        char id PK\r
        char parent_id \r
        varchar name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    water_heaters {\r
        char id PK\r
        varchar name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    networks {\r
        char id PK\r
        varchar name \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    users {\r
        char id PK\r
        char created_by_id \r
        char role_id FK\r
        char title_id FK\r
        char address_id FK\r
        varchar first_name \r
        varchar last_name \r
        varchar home_phone \r
        varchar mobile_phone \r
        varchar email \r
        timestamp email_verified_at \r
        varchar password \r
        int labour_rate \r
        varchar licence_number \r
        varchar color \r
        timestamp activated_at \r
        longtext settings \r
        varchar remember_token \r
        timestamp deleted_at \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    roof_types {\r
        char id PK\r
        varchar name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    shading_types {\r
        char id PK\r
        varchar name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    personal_access_tokens {\r
        bigint id PK\r
        varchar tokenable_type \r
        bigint tokenable_id \r
        varchar name \r
        varchar token \r
        text abilities \r
        timestamp last_used_at \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    form_coc_system_check_checkbox_list {\r
        char id PK\r
        varchar name \r
        varchar display_name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    pipeline_stages {\r
        char id PK\r
        char pipeline_id FK\r
        varchar name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    document_categories {\r
        char id PK\r
        varchar name \r
        varchar display_name \r
        varchar folder \r
        varchar visibility \r
        varchar description \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    tenants {\r
        char id PK\r
        char created_by_id \r
        varchar name \r
        varchar description \r
        varchar domain \r
        varchar database \r
        varchar s3_bucket \r
        int redis_database \r
        int redis_cache \r
        longtext settings \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    equipment_model_histories {\r
        char id PK\r
        char created_by_id FK\r
        char equipment_model_id FK\r
        int cost_price \r
        int sell_price \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    equipment_model_categories {\r
        char id PK\r
        char parent_id \r
        varchar name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    retailers {\r
        char id PK\r
        varchar name \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    handover_type_list {\r
        char id PK\r
        varchar name \r
        varchar display_name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    maintenance_procedure_list {\r
        char id PK\r
        varchar name \r
        varchar display_name \r
        text shutdown_description \r
        text shutdown_steps \r
        varchar shutdown_warning \r
        text startup_description \r
        text startup_steps \r
        varchar startup_warning \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    rag_status_types {\r
        char id PK\r
        varchar name \r
        varchar description \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    migrations {\r
        int id PK\r
        varchar migration \r
        int batch \r
    }\r
\r
    roof_bracket_types {\r
        char id PK\r
        varchar name \r
        int order \r
        timestamp created_at \r
        timestamp updated_at \r
    }\r
\r
    equipment_models }o--|| equipment_brands : "brand_id"\r
    equipment_models }o--|| equipment_model_categories : "category_id"\r
    equipment_models }o--|| users : "created_by_id"\r
    equipment_models }o--|| equipment_model_categories : "sub_category_id"\r
    equipment_model_histories }o--|| equipment_models : "equipment_model_id"\r
    pipeline_stages }o--|| pipelines : "pipeline_id"\r
    users }o--|| titles : "title_id"\r
    users }o--|| roles : "role_id"\r
    equipment_model_histories }o--|| users : "created_by_id"\r
`,c=m("",6),_={class:"mermaid zoomable w-full overflow-hidden max-h-800px"},b=JSON.parse('{"title":"Database","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"Schema","slug":"schema","link":"#schema","children":[{"level":3,"title":"Tables","slug":"tables","link":"#tables","children":[]},{"level":3,"title":"Relational diagram","slug":"relational-diagram","link":"#relational-diagram","children":[]}]}],"relativePath":"guide/database.md","lastUpdated":1674101025000}'),p={name:"guide/database.md"},K=Object.assign(p,{setup(h){return a(async()=>{r({x:-4300,y:0,k:.6})}),(o,l)=>(e(),t("div",null,[c,n("pre",_,"    "+i(d(s))+`
`,1)]))}});export{b as __pageData,K as default};
