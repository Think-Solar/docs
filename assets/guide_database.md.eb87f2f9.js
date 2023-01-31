import{i as a}from"./chunks/useMermaid.f32cc07f.js";import{o as e,a as t,c as n,b as r,t as i,u as d,e as m}from"./app.d6487981.js";const s=`erDiagram
    storey_types {
        char id PK
        varchar name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    notifications {
        char id PK
        varchar type 
        varchar notifiable_type 
        char notifiable_id 
        text data 
        timestamp read_at 
        timestamp created_at 
        timestamp updated_at 
    }

    form_coc_work_type_list {
        char id PK
        varchar name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    sales_pipeline_sources {
        char id PK
        char parent_id 
        varchar name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    equipment_brands {
        char id PK
        varchar name 
        timestamp created_at 
        timestamp updated_at 
    }

    form_coc_type_list {
        char id PK
        varchar name 
        varchar display_name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    projects_pipeline_item_categories {
        char id PK
        varchar name 
        varchar display_name 
        varchar description 
        timestamp created_at 
        timestamp updated_at 
    }

    equipment_models {
        char id PK
        char created_by_id FK
        char category_id FK
        char sub_category_id FK
        char brand_id FK
        varchar name 
        varchar description 
        varchar warranty_sheet 
        varchar data_sheet 
        int voc 
        int isc 
        decimal temperature_coefficient 
        int wattage 
        text instructions 
        text manual 
        int min_stock_quantity 
        timestamp created_at 
        timestamp updated_at 
        timestamp archived_at 
    }

    compass_point_types {
        char id PK
        varchar name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    orientation_types {
        char id PK
        varchar name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    timesheet_types {
        char id PK
        varchar name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    media_categories {
        char id PK
        varchar name 
        varchar display_name 
        varchar description 
        timestamp created_at 
        timestamp updated_at 
    }

    pipelines {
        char id PK
        varchar name 
        timestamp created_at 
        timestamp updated_at 
    }

    suppliers {
        char id PK
        varchar name 
        timestamp created_at 
        timestamp updated_at 
    }

    task_categories {
        char id PK
        char parent_id 
        varchar name 
        timestamp created_at 
        timestamp updated_at 
    }

    phase_types {
        char id PK
        varchar name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    sales_pipeline_products {
        char id PK
        varchar name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    titles {
        char id PK
        varchar name 
        timestamp created_at 
        timestamp updated_at 
    }

    roles {
        char id PK
        varchar name 
        varchar display_name 
        varchar description 
        timestamp created_at 
        timestamp updated_at 
    }

    form_coc_reference_standard_list {
        char id PK
        varchar name 
        varchar display_name 
        varchar description 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    difficulty_types {
        char id PK
        varchar name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    addresses {
        char id PK
        char created_by_id FK
        varchar street 
        varchar city 
        varchar state 
        varchar country_iso 
        varchar postal_code 
        double lat 
        double lng 
        timestamp created_at 
        timestamp updated_at 
    }

    form_coc_compliance_checkbox_list {
        char id PK
        varchar name 
        varchar description 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    form_coc_grid_type_list {
        char id PK
        varchar name 
        varchar display_name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    form_coc_work_risk_list {
        char id PK
        varchar name 
        varchar display_name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    sales_pipeline_item_closed_categories {
        char id PK
        char parent_id 
        varchar name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    water_heaters {
        char id PK
        varchar name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    networks {
        char id PK
        varchar name 
        timestamp created_at 
        timestamp updated_at 
    }

    users {
        char id PK
        char created_by_id 
        char role_id FK
        char title_id FK
        char address_id FK
        varchar first_name 
        varchar last_name 
        varchar home_phone 
        varchar mobile_phone 
        varchar email 
        timestamp email_verified_at 
        varchar password 
        int labour_rate 
        varchar licence_number 
        varchar color 
        timestamp activated_at 
        longtext settings 
        varchar remember_token 
        timestamp deleted_at 
        timestamp created_at 
        timestamp updated_at 
    }

    roof_types {
        char id PK
        varchar name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    shading_types {
        char id PK
        varchar name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    personal_access_tokens {
        bigint id PK
        varchar tokenable_type 
        bigint tokenable_id 
        varchar name 
        varchar token 
        text abilities 
        timestamp last_used_at 
        timestamp created_at 
        timestamp updated_at 
    }

    form_coc_system_check_checkbox_list {
        char id PK
        varchar name 
        varchar display_name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    pipeline_stages {
        char id PK
        char pipeline_id FK
        varchar name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    document_categories {
        char id PK
        varchar name 
        varchar display_name 
        varchar folder 
        varchar visibility 
        varchar description 
        timestamp created_at 
        timestamp updated_at 
    }

    tenants {
        char id PK
        char created_by_id 
        varchar name 
        varchar description 
        varchar domain 
        varchar database 
        varchar s3_bucket 
        int redis_database 
        int redis_cache 
        longtext settings 
        timestamp created_at 
        timestamp updated_at 
    }

    equipment_model_histories {
        char id PK
        char created_by_id FK
        char equipment_model_id FK
        int cost_price 
        int sell_price 
        timestamp created_at 
        timestamp updated_at 
    }

    equipment_model_categories {
        char id PK
        char parent_id 
        varchar name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    retailers {
        char id PK
        varchar name 
        timestamp created_at 
        timestamp updated_at 
    }

    handover_type_list {
        char id PK
        varchar name 
        varchar display_name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    maintenance_procedure_list {
        char id PK
        varchar name 
        varchar display_name 
        text shutdown_description 
        text shutdown_steps 
        varchar shutdown_warning 
        text startup_description 
        text startup_steps 
        varchar startup_warning 
        timestamp created_at 
        timestamp updated_at 
    }

    rag_status_types {
        char id PK
        varchar name 
        varchar description 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    migrations {
        int id PK
        varchar migration 
        int batch 
    }

    roof_bracket_types {
        char id PK
        varchar name 
        int order 
        timestamp created_at 
        timestamp updated_at 
    }

    equipment_models }o--|| equipment_brands : "brand_id"
    equipment_models }o--|| equipment_model_categories : "category_id"
    equipment_models }o--|| users : "created_by_id"
    equipment_models }o--|| equipment_model_categories : "sub_category_id"
    equipment_model_histories }o--|| equipment_models : "equipment_model_id"
    pipeline_stages }o--|| pipelines : "pipeline_id"
    users }o--|| titles : "title_id"
    users }o--|| roles : "role_id"
    equipment_model_histories }o--|| users : "created_by_id"
`,c=m('<h1 id="database" tabindex="-1">Database <a class="header-anchor" href="#database" aria-hidden="true">#</a></h1><p>An overview of the database tables and relationships</p><h2 id="schema" tabindex="-1">Schema <a class="header-anchor" href="#schema" aria-hidden="true">#</a></h2><h3 id="tables" tabindex="-1">Tables <a class="header-anchor" href="#tables" aria-hidden="true">#</a></h3><ul><li>pipeline</li><li>pipeline_item</li><li>sales_pipeline_item</li><li>projects_pipeline_item</li></ul><h3 id="relational-diagram" tabindex="-1">Relational diagram <a class="header-anchor" href="#relational-diagram" aria-hidden="true">#</a></h3>',6),_={class:"mermaid zoomable w-full overflow-hidden max-h-800px"},b=JSON.parse('{"title":"Database","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"Schema","slug":"schema","link":"#schema","children":[{"level":3,"title":"Tables","slug":"tables","link":"#tables","children":[]},{"level":3,"title":"Relational diagram","slug":"relational-diagram","link":"#relational-diagram","children":[]}]}],"relativePath":"guide/database.md","lastUpdated":1674101025000}'),p={name:"guide/database.md"},K=Object.assign(p,{setup(h){return e(async()=>{a({x:-4300,y:0,k:.6})}),(o,l)=>(t(),n("div",null,[c,r("pre",_,"    "+i(d(s))+`
`,1)]))}});export{b as __pageData,K as default};
