import{i as e}from"./chunks/useMermaid.854f2eb1.js";import{e as t,o as n,c as i,a,t as r,u as d,d as s}from"./app.16583731.js";const c=`erDiagram

    pipelines {
        char id PK
        varchar name 
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

    equipment_brands {
        char id PK
        varchar name 
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

    equipment_models }o--|| equipment_brands : "brand_id"
    equipment_models }o--|| equipment_model_categories : "category_id"
    equipment_models }o--|| users : "created_by_id"
    equipment_models }o--|| equipment_model_categories : "sub_category_id"
    equipment_model_histories }o--|| equipment_models : "equipment_model_id"
    pipeline_stages }o--|| pipelines : "pipeline_id"
    users }o--|| titles : "title_id"
    users }o--|| roles : "role_id"
    equipment_model_histories }o--|| users : "created_by_id"
`,m=s("",5),_={class:"w-full overflow-x-auto"},h={class:"mermaid w-auto"},g=JSON.parse('{"title":"Database","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"Schema","slug":"schema","link":"#schema","children":[{"level":3,"title":"Schema diagram","slug":"schema-diagram","link":"#schema-diagram","children":[]}]}],"relativePath":"guide/database.md","lastUpdated":1674053737000}'),o={name:"guide/database.md"},K=Object.assign(o,{setup(p){return t(async()=>{e()}),(l,u)=>(n(),i("div",null,[m,a("div",_,[a("pre",h,"    "+r(d(c))+`
`,1)])]))}});export{g as __pageData,K as default};
