define({ "api": [
  {
    "type": "delete",
    "url": "/agent/menus/{id}",
    "title": "删除菜单",
    "description": "<p>删除菜单操作</p>",
    "group": "AgentMenus",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/menus/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}\n{\n\"code\": 400,\n\"text\": \"数据错误\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentMenusController.php",
    "groupTitle": "AgentMenus",
    "name": "DeleteAgentMenusId"
  },
  {
    "type": "get",
    "url": "/agent/getMenus",
    "title": "分配菜单时获取数据",
    "description": "<p>分配菜单时获取数据</p>",
    "group": "AgentMenus",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "grade_id",
            "description": "<p>代理类型id,总代则为1，2为二级代理,默认为1</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/menu/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": [\n{\n\"id\": 1,\n\"parent_id\": 0,\n\"title_cn\": \"账号管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": null,\n\"link_url\": \"/accountManage\",\n\"icon\": \"class1\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"M1001\",\n\"is_have\": 1,\n\"_child\": [\n{\n\"id\": 2,\n\"parent_id\": 1,\n\"title_cn\": \"代理商管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": null,\n\"link_url\": \"/accountManage/AgentM\",\n\"icon\": \"df\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"M1003\",\n\"is_have\": 0\t\t//是否拥有菜单\n},\n]\n},\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentMenusController.php",
    "groupTitle": "AgentMenus",
    "name": "GetAgentGetmenus"
  },
  {
    "type": "get",
    "url": "/agent/menus",
    "title": "厅主系统菜单列表",
    "description": "<p>获取厅主系统菜单列表</p>",
    "group": "AgentMenus",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/menus"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": [\n{\n\"id\": 1,\n\"parent_id\": 0,\n\"title_cn\": \"账号管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"账号管理\",\n\"link_url\": \"/account/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"account\",\n\"_child\": [\n{\n\"id\": 5,\n\"parent_id\": 1,\n\"title_cn\": \"|--厅主管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"厅主管理\",\n\"link_url\": \"/haller/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"haller\"\n},\n{\n\"id\": 6,\n\"parent_id\": 1,\n\"title_cn\": \"|--代理管理管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"代理\",\n\"link_url\": \"/agent/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"agent\"\n},\n{\n\"id\": 7,\n\"parent_id\": 1,\n\"title_cn\": \"|--玩家管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"玩家管理\",\n\"link_url\": \"/player/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"palyer\"\n}\n]\n},\n{\n\"id\": 2,\n\"parent_id\": 0,\n\"title_cn\": \"游戏管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"游戏管理\",\n\"link_url\": \"/game/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"game\",\n\"_child\": [\n{\n\"id\": 8,\n\"parent_id\": 2,\n\"title_cn\": \"|--游戏列表\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"游戏列表\",\n\"link_url\": \"/games/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"games\"\n},\n{\n\"id\": 9,\n\"parent_id\": 2,\n\"title_cn\": \"|--游戏限额\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"游戏限额\",\n\"link_url\": \"games/limit\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"games_limit\"\n}\n]\n},\n{\n\"id\": 3,\n\"parent_id\": 0,\n\"title_cn\": \"报表统计\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"报表统计\",\n\"link_url\": \"/report/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"report\",\n\"_child\": [\n{\n\"id\": 10,\n\"parent_id\": 3,\n\"title_cn\": \"|--游戏数据统计\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"游戏数据统计\",\n\"link_url\": \"game_report/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"game_report\",\n\"_child\": [\n{\n\"id\": 11,\n\"parent_id\": 10,\n\"title_cn\": \"|--查询游戏\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"查询游戏\",\n\"link_url\": \"game_select/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"game_select\",\n\"_child\": [\n{\n\"id\": 26,\n\"parent_id\": 11,\n\"title_cn\": \"|--开始了22\",\n\"title_en\": \"|--abc\",\n\"class\": 1,\n\"desc\": null,\n\"link_url\": \"www.baidu.com\",\n\"icon\": \"www.baidu.com\",\n\"state\": 1,\n\"sort_id\": 100,\n\"menu_code\": null\n},\n{\n\"id\": 28,\n\"parent_id\": 11,\n\"title_cn\": \"|--开始了\",\n\"title_en\": \"|--abc\",\n\"class\": 1,\n\"desc\": null,\n\"link_url\": \"www.baidu.com\",\n\"icon\": \"www.baidu.com\",\n\"state\": 1,\n\"sort_id\": 100,\n\"menu_code\": null\n},\n{\n\"id\": 29,\n\"parent_id\": 11,\n\"title_cn\": \"|--开始了1\",\n\"title_en\": \"|--abc——1\",\n\"class\": 1,\n\"desc\": null,\n\"link_url\": \"www.albaba.com\",\n\"icon\": \"www.albaba.com\",\n\"state\": 1,\n\"sort_id\": 100,\n\"menu_code\": null\n}\n]\n}\n]\n}\n]\n},\n{\n\"id\": 4,\n\"parent_id\": 0,\n\"title_cn\": \"系统管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"系统管理\",\n\"link_url\": \"/system/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"system\",\n\"_child\": [\n{\n\"id\": 12,\n\"parent_id\": 4,\n\"title_cn\": \"|--白名单管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"白名单管理\",\n\"link_url\": \"system/allow\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"system_allow\"\n},\n{\n\"id\": 13,\n\"parent_id\": 4,\n\"title_cn\": \"|--菜单管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"菜单管理\",\n\"link_url\": \"system/menus\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"system_menus\"\n},\n{\n\"id\": 14,\n\"parent_id\": 4,\n\"title_cn\": \"|--角色管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"角色管理\",\n\"link_url\": \"system/role\",\n\"icon\": \"\",\n\"state\": null,\n\"sort_id\": null,\n\"menu_code\": \"system_role\"\n}\n]\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    code:400,\n    text:'数据列表为空',\n    result:''\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentMenusController.php",
    "groupTitle": "AgentMenus",
    "name": "GetAgentMenus"
  },
  {
    "type": "patch",
    "url": "/agent/addRole",
    "title": "厅主、代理商分配菜单",
    "description": "<p>厅主、代理商分配菜单</p>",
    "group": "AgentMenus",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "agent_id",
            "description": "<p>厅主、代理商ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "grade_id",
            "description": "<p>代理级别，总代则为1，2为二级代理,默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menus",
            "description": "<p>菜单数组，格式为 &quot;menus&quot; =&gt; ['id-parent_id']</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/updateRole/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"id\": 9\n    }\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentMenusController.php",
    "groupTitle": "AgentMenus",
    "name": "PatchAgentAddrole"
  },
  {
    "type": "patch",
    "url": "/agent/menus{id}",
    "title": "保存修改菜单",
    "description": "<p>保存修改菜单</p>",
    "group": "AgentMenus",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title_cn",
            "description": "<p>菜单的中文名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title_en",
            "description": "<p>菜单的英文名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>菜单的icon图标地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link_url",
            "description": "<p>菜单的url地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sort_id",
            "description": "<p>菜单的排序</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "parent_id",
            "description": "<p>菜单所属父级ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "class",
            "description": "<p>菜单类型分类，0为分类菜单，1为页面菜单，默认为分类菜单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>菜单的描述信息</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/menus/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}\n{\n\"code\": 400,\n\"text\": \"数据错误\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentMenusController.php",
    "groupTitle": "AgentMenus",
    "name": "PatchAgentMenusId"
  },
  {
    "type": "post",
    "url": "/agent/menus",
    "title": "添加菜单",
    "description": "<p>添加菜单</p>",
    "group": "AgentMenus",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title_cn",
            "description": "<p>菜单的中文名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title_en",
            "description": "<p>菜单的英文名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>菜单的icon图标地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link_url",
            "description": "<p>菜单的url地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sort_id",
            "description": "<p>菜单的排序</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "parent_id",
            "description": "<p>菜单所属父级ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "class",
            "description": "<p>菜单类型分类，1为厅主类菜单，2为代理类菜单,0为通用菜单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>菜单的描述信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menu_code",
            "description": "<p>菜单的标识符</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/menus"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentMenusController.php",
    "groupTitle": "AgentMenus",
    "name": "PostAgentMenus"
  },
  {
    "type": "post",
    "url": "/agent/menus/{id}",
    "title": "编辑菜单时获取数据",
    "description": "<p>编辑菜单时获取数据</p>",
    "group": "AgentMenus",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>编辑的菜单id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/menu/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"id\": 11,\n    \"parent_id\": 10,\n    \"title_cn\": \"查询游戏\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"查询游戏\",\n    \"link_url\": \"game_select/list\",\n    \"icon\": \"http://app-loc.dev/\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"game_select\"\n    }\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"菜单不存在\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentMenusController.php",
    "groupTitle": "AgentMenus",
    "name": "PostAgentMenusId"
  },
  {
    "type": "post",
    "url": "/auth/token/refresh",
    "title": "刷新token(refresh token)",
    "description": "<p>刷新token(refresh token)</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户旧的jwt-token, value已Bearer开头</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL21vYmlsZS5kZWZhcmEuY29tXC9hdXRoXC90b2tlbiIsImlhdCI6IjE0NDU0MjY0MTAiLCJleHAiOiIxNDQ1NjQyNDIxIiwibmJmIjoiMTQ0NTQyNjQyMSIsImp0aSI6Ijk3OTRjMTljYTk1NTdkNDQyYzBiMzk0ZjI2N2QzMTMxIn0.9UPMTxo3_PudxTWldsf4ag0PHq1rK8yO9e5vqdwRZLY\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"code\":0,\n  \"text\":\"刷新成功\",\n  \"result\":\"9UPMTxo3_PudxTWldsf4ag0PHq1rK8yO9e5vqdwRZLY.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL21vYmlsZS5kZWZhcmEuY29tXC9hdXRoXC90b2tlbiIsImlhdCI6IjE0NDU0MjY0MTAiLCJleHAiOiIxNDQ1NjQyNDIxIiwibmJmIjoiMTQ0NTQyNjQyMSIsImp0aSI6Ijk3OTRjMTljYTk1NTdkNDQyYzBiMzk0ZjI2N2QzMTMxIn0.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AuthController.php",
    "groupTitle": "Auth",
    "name": "PostAuthTokenRefresh"
  },
  {
    "type": "post",
    "url": "/authorization",
    "title": "登录",
    "description": "<p>登录</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名 chensj</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码 111111</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gid",
            "description": "<p>验证码GID</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        \"code\": 0,\n        \"text\": \"认证成功\",\n        \"result\": {\n        \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBwLWxvYy5kZXYvYXBpL2F1dGhvcml6YXRpb24iLCJpYXQiOjE0ODYyNTkyNzYsImV4cCI6MTQ4NjQ3NTI3NiwibmJmIjoxNDg2MjU5Mjc2LCJqdGkiOiJlMGJjOTI1ZTMxNDU1NDgxNWFmZGVhM2E1M2I5NTM0MSIsInN1YiI6MX0.H8S0KYxmlrY_D3XIuDmsyuu82mo1_TpGsjtbvXL77YM\",\n        \"user\": {\n        \"id\": 1,\n        \"user_name\": \"chensj\",\n        \"desc\": \"陈\",\n        \"group_id\": 1,\n        \"tel\": \"15013777164\",\n        \"account_state\": 1,\n        \"add_time\": \"2017-01-20 06:13:09\",\n        \"update_time\": \"2017-01-20 07:56:39\",\n        \"ip_info\": \"127.0.0.1\"\n        },\n        \"menus\": [\n        {\n        \"id\": 1,\n        \"parent_id\": 0,\n        \"title_cn\": \"账号管理\",\n        \"desc\": \"账号管理\",\n        \"link_url\": \"/account/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"account\",\n        \"_child\": [\n        {\n        \"id\": 5,\n        \"parent_id\": 1,\n        \"title_cn\": \"厅主管理\",\n        \"desc\": \"厅主管理\",\n        \"link_url\": \"/haller/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"haller\"\n        },\n        {\n        \"id\": 6,\n        \"parent_id\": 1,\n        \"title_cn\": \"代理管理管理\",\n        \"desc\": \"代理\",\n        \"link_url\": \"/agent/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"agent\"\n        },\n        {\n        \"id\": 7,\n        \"parent_id\": 1,\n        \"title_cn\": \"玩家管理\",\n        \"desc\": \"玩家管理\",\n        \"link_url\": \"/player/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"palyer\"\n        }\n        ]\n        },\n        {\n        \"id\": 2,\n        \"parent_id\": 0,\n        \"title_cn\": \"游戏管理\",\n        \"desc\": \"游戏管理\",\n        \"link_url\": \"/game/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"game\",\n        \"_child\": [\n        {\n        \"id\": 8,\n        \"parent_id\": 2,\n        \"title_cn\": \"游戏列表\",\n        \"desc\": \"游戏列表\",\n        \"link_url\": \"/games/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"games\"\n        },\n        {\n        \"id\": 9,\n        \"parent_id\": 2,\n        \"title_cn\": \"游戏限额\",\n        \"desc\": \"游戏限额\",\n        \"link_url\": \"games/limit\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"games_limit\"\n        }\n        ]\n        },\n        {\n        \"id\": 3,\n        \"parent_id\": 0,\n        \"title_cn\": \"报表统计\",\n        \"desc\": \"报表统计\",\n        \"link_url\": \"/report/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"report\",\n        \"_child\": [\n        {\n        \"id\": 10,\n        \"parent_id\": 3,\n        \"title_cn\": \"游戏数据统计\",\n        \"desc\": \"游戏数据统计\",\n        \"link_url\": \"game_report/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"game_report\",\n        \"_child\": [\n        {\n        \"id\": 11,\n        \"parent_id\": 10,\n        \"title_cn\": \"查询游戏\",\n        \"desc\": \"查询游戏\",\n        \"link_url\": \"game_select/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"game_select\"\n        }\n        ]\n        }\n        ]\n        }\n        ],\n        \"languages\": {\n        \"简体中文\": \"zh-cn\",\n        \"English\": \"en\",\n        \"繁体中文\": \"zh-tw\"\n        },\n        \"timezones\": {\n        \"(GMT+08:00) Urumqi\": \"Asia/Hong_Kong\"\n        }\n        }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n  \"code\": 400,\n   \"text\":'',\n   \"result\":''\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AuthController.php",
    "groupTitle": "Auth",
    "name": "PostAuthorization"
  },
  {
    "type": "post",
    "url": "/captcha",
    "title": "验证码",
    "description": "<p>验证码</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gid",
            "description": "<p>验证码GID</p>"
          }
        ]
      }
    },
    "group": "Auth",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"code\": 0,\n    \"text\": \"ok\",\n    \"result\": {\n    \"captcha_img\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2OTApLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAKACWAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/Uuivnn9oi78YfCnxTpvxN0LU9Qv/DVsFt9a8NrPK0TqcjzlU7kQYCgkBcFc5Jc17Z4M8W2Hjvwrpmv6ZIJbG/hEsZBzjsyn3BBB+lePUw0oUoVk7xl+D7Pz69mjdqyubVFQXd9b2EXmXMyQJ/edgK5TxD8WfDvhnTbjULyeX7FbjdLNHESEHHPr3/SuB1IKShfV6JdSTsqqT6rZ2xIkuolYdV3jP5VleB/HuhfEfQl1jw7frqOnlzF5qoy4cYyuGAPGRWR8SPiZ4Q+D+k/2r4huYbLzSfKjjjDTzsOSEUck89envXfSpXqeynGTltZb3+ZnUVV2VO1/O/6HSjX7aRQ0MdxcKe8cLEfyoOrvGR51hdRg/wASqHA+uDXzLL/wUG8MxX6Z8J63/ZbHi7PlhyPUJnB/76r6M8CePNE+JPhq113w/eLe6dcDhgMMjDqrKeQw7iu7EYWeEipVaDSfVy/y0TMnQxK1lUt/26rfm/zNGLXLCXOLqNSOCJDsP5HFLLrdhEpZryEgf3XDH8hVqWCKcYljSQejqDSQ2sNv/qoY4/8AcUCuG+H3tL71+dv0Jtidrx+5/lf9Sk2rTTYNlZSXK93c+UPw3DmgapcRKDcadPHz1iIlA/I5/StKil7Wlt7NW9Xf7/8AgB7Krv7V39Fb7t/xM9dfsGJBuVjYdVkBUj8CKT+2o7gEWUbXkgPQAqo+rEYrQIB6jNeL/G34Y+P/AIp+JLDSNM8Vjwz4Fa2LX5s1/wBKll3H5M5BKlcY5A4OQeK3oLDVJ2l7q7t6fcld+S09SlTrydpTSXktfxbX4HqVvqtzeSSLAbCZo+HjjudzL9cDitK2kklhVpovJkOcpu3Y59a+JfjX+z/ZfsyeH9L+IHgnXtSg1bT72KOYXcoYXAY8g4A4OOV6EE19o6Hqia3oun6jGpRLy3juFU9QHUMB+tbYyjTjShVotOMm1ezTut1a773uaxoun7ym5J97f5F6iiivINAooooAp6xpNjrml3NhqdtDeWFwhSaC4UMjr6EGvjGDxLqP7J/xTm0XTL7+0fAHiOZWgknJ8vT5dxBEY3lQAHQFiBuG3k7Dn7B1nQH1u6jE13Ilgqjdbx8b2z1J9MVR8afDnQ/Hfgy78Mala/8AEsuE24j4eM9Qynsff3PrXRhMVOE5Uasf3MtH38pR7Nbp9dioyto9g03wlaXix319dHWJJVDrKWzGVPI24PI9O2D0qp8UvD1vqXww8TafFBHGkmnyjaigDhSw/lXjH7Nni3WPh1441f4NeKn+XTlM3h+7aIRrPb7iSm8hfMb5twwv8EvOAK+jNbtvtui39uBnzreSPH1UiiWDhl9dKFns0+63Tv8An2d0Djys+D/2YNI1ZvhlL4s8MKH8Q+GNZeS4t/MEYvdPkijMkLnjdtKM6qWAyW9aseCda0X9qP8Aa0lvtaLXnhy2tDNp+n3gwpWMIFjZen3ndiOcnPUV13/BP+Y2Os/EjSCcLBcQFF+jTK38lrS+L/7F2q+Kfit/wk/gzWrPw5a3mZrsFnjkhn7tEI1wQ3BIJHO45OcV9tWxFGGNxFOtLkbT5ZduZJ2/y9WjpbSnJPQ6H4v/AAw+KesXOuW+m+K/C2hfD/YPsmi3FpEqsqoMrIxhG3LA8h+AR0xXyl8CfjV4v+C/jWXSNGih1qzu7kxz6Qjgxzv0BjfqD6YOD3Br27xx+y/B4G8Iah4g+I/xP1XV9Ps4i8dkkjRi4kx8kSh2bljgcD1PHWvnnR/hrqelfCmL4nQRyQQWmspHB1y6DHzA+gYEZrqy9YeeHnSnKM4tqK93lTlrbW92+73XcqHLytPX5H0p48/4KD2un3NjH4Z8M3EjDeL6DXF8iSJgRtChGYf3uvtxXYfHT9rvw7ovwye58D+JbK68UXnk/ZoowJmt1YhnLqQVBC5GD0J9q8M8E+Fp/wBrr4heP/Et9E0ccWklLJT92K58sLEv0BDNXm3gSz03x9qHw98BjQYLTVU1qSPVL5YQJp4WePaHbr8g87I6Y21lHLcDzR9xqVOzmr33TlrfdK1tEtxckO2257FrP7YF3onjHwBeWvi+51/R4tPh/wCEisYrMRg3PPnbSyLu+9xg7RtGOtL8ff2xrxvHfh6++HXiCVtHtrdJLqDyyqTuX3NG6Ov935SR74Ne4ftRfB3Rr/4E6tDoGi2OlzaUV1C3j0+1SEAp94AIAOVLV84/sufB7Tfj/P461DXtPt44ksUs7N7ePylguXBxMoTALLsBOeu7nOaxwry6pR+uyp2ULxa0d7vS6SV3q7dkvQUeS3NbY+i/j38c9W0PQ/h4/gi7hS58W3cKwyzQrIRBIFwQpyAcutegfG74w6f8FPBEmt3kLX13JILeysUba1xMRwuewABJOOgr88vhP4X8Y+OPiroXhGLX7zTtW0Kac2pvGaeHTpIcthI2JAG9QCAMex6V7L8dvh/8U/D/AIi8C3+uazcfE7UBf/ao9NtbDyoIWjKnGEGMNnk7V6d6wq5XhqVajh5TjpdvdOSd2tdrWVrtrrbcl04ppXO4tvgP8Rv2hb3Tdb+K2sRaRoKsLiHwzp4IZVPIDdlJHGSWb6Gvq23t47S3ighQRwxKERFGAqgYAH4V8vDxB+1Hr8v2q28PaFoFs3zJbXMkTHHofnZgfrivcfhHd+NLvwbC3j6ytrLxGs0iSLaMjRvHn5GG1iBkHp146V4uPVWUYuc4cq2jFrS/kvxd2Zzv1aO0ooorwzIKKKKACiiigAooooA+Pv2TPDGs+Ffj78RLe80y8tbCaKV0uJYGWJ289SAGIwThm/Kuq+J3hf8AaH1D4gX934T1qws9AmxHb2/noFjQd2DKTuPcrz26UUV7lfHy+sutyRbcUtVdbLXXqaOd3exj6d+x74p+IOqW2pfFrx1PrawnI06wJ2H23kAAfRM+4r3rxf8ACbQ/FHwxufA0MK6Vo72y20K2yD9wFIKlQepGO/XmiiuOtj8RWlFylbl1SSSS9EtBOTZjfAX4G2HwJ8M3elWl8+py3Vx50t3JEIywAwowCenPfvXOeDP2VdD8H/GfUPiDFqE0s00009vp4jURRNKCGJPJPLMRjHWiioeNxDlUnzu89JeYuZ6u+57Zd2sN9azW1xGs0EyGOSNxkMpGCD7EVi+DvAPh34fWM9n4c0i10e1nk86SK1TaHfAGT+AFFFcqnJRcU9H0Ec3oHwJ8KeGfidqnjyxguI9d1FXE2ZcwgvjeVXHBJXJ57mvQ6KKqpVnVadR3sra9lsgbvuFFFFZCCiiigAooooA//9k=\",\n    \"captcha_value\": \"l9ww2\"\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/CaptchaController.php",
    "groupTitle": "Auth",
    "name": "PostCaptcha"
  },
  {
    "type": "post",
    "url": "/language",
    "title": "语言列表",
    "description": "<p>语言列表</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n            \"code\": 0,\n            \"text\": \"操作成功\",\n            \"result\": {\n                \"language\": {\n                    \"简体中文\": \"zh-cn\",\n                    \"English\": \"en\",\n                    \"繁体中文\": \"zh-tw\"\n                }\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AuthController.php",
    "groupTitle": "Auth",
    "name": "PostLanguage"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "注册(register)",
    "description": "<p>注册(register)</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>email[unique]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL21vYmlsZS5kZWZhcmEuY29tXC9hdXRoXC90b2tlbiIsImlhdCI6IjE0NDU0MjY0MTAiLCJleHAiOiIxNDQ1NjQyNDIxIiwibmJmIjoiMTQ0NTQyNjQyMSIsImp0aSI6Ijk3OTRjMTljYTk1NTdkNDQyYzBiMzk0ZjI2N2QzMTMxIn0.9UPMTxo3_PudxTWldsf4ag0PHq1rK8yO9e5vqdwRZLY\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"email\": [\n        \"该邮箱已被他人注册\"\n    ],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AuthController.php",
    "groupTitle": "Auth",
    "name": "PostUsers"
  },
  {
    "type": "delete",
    "url": "/role/menus/{id}",
    "title": "删除菜单",
    "description": "<p>删除菜单操作</p>",
    "group": "Menus",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/menus/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}\n{\n\"code\": 400,\n\"text\": \"数据错误\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MenusController.php",
    "groupTitle": "Menus",
    "name": "DeleteRoleMenusId"
  },
  {
    "type": "get",
    "url": "/menus",
    "title": "菜单列表",
    "description": "<p>获取后台菜单组列表</p>",
    "group": "Menus",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/menus"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": [\n{\n\"id\": 1,\n\"parent_id\": 0,\n\"title_cn\": \"账号管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"账号管理\",\n\"link_url\": \"/account/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"account\",\n\"_child\": [\n{\n\"id\": 5,\n\"parent_id\": 1,\n\"title_cn\": \"|--厅主管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"厅主管理\",\n\"link_url\": \"/haller/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"haller\"\n},\n{\n\"id\": 6,\n\"parent_id\": 1,\n\"title_cn\": \"|--代理管理管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"代理\",\n\"link_url\": \"/agent/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"agent\"\n},\n{\n\"id\": 7,\n\"parent_id\": 1,\n\"title_cn\": \"|--玩家管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"玩家管理\",\n\"link_url\": \"/player/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"palyer\"\n}\n]\n},\n{\n\"id\": 2,\n\"parent_id\": 0,\n\"title_cn\": \"游戏管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"游戏管理\",\n\"link_url\": \"/game/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"game\",\n\"_child\": [\n{\n\"id\": 8,\n\"parent_id\": 2,\n\"title_cn\": \"|--游戏列表\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"游戏列表\",\n\"link_url\": \"/games/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"games\"\n},\n{\n\"id\": 9,\n\"parent_id\": 2,\n\"title_cn\": \"|--游戏限额\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"游戏限额\",\n\"link_url\": \"games/limit\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"games_limit\"\n}\n]\n},\n{\n\"id\": 3,\n\"parent_id\": 0,\n\"title_cn\": \"报表统计\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"报表统计\",\n\"link_url\": \"/report/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"report\",\n\"_child\": [\n{\n\"id\": 10,\n\"parent_id\": 3,\n\"title_cn\": \"|--游戏数据统计\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"游戏数据统计\",\n\"link_url\": \"game_report/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"game_report\",\n\"_child\": [\n{\n\"id\": 11,\n\"parent_id\": 10,\n\"title_cn\": \"|--查询游戏\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"查询游戏\",\n\"link_url\": \"game_select/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"game_select\",\n\"_child\": [\n{\n\"id\": 26,\n\"parent_id\": 11,\n\"title_cn\": \"|--开始了22\",\n\"title_en\": \"|--abc\",\n\"class\": 1,\n\"desc\": null,\n\"link_url\": \"www.baidu.com\",\n\"icon\": \"www.baidu.com\",\n\"state\": 1,\n\"sort_id\": 100,\n\"menu_code\": null\n},\n{\n\"id\": 28,\n\"parent_id\": 11,\n\"title_cn\": \"|--开始了\",\n\"title_en\": \"|--abc\",\n\"class\": 1,\n\"desc\": null,\n\"link_url\": \"www.baidu.com\",\n\"icon\": \"www.baidu.com\",\n\"state\": 1,\n\"sort_id\": 100,\n\"menu_code\": null\n},\n{\n\"id\": 29,\n\"parent_id\": 11,\n\"title_cn\": \"|--开始了1\",\n\"title_en\": \"|--abc——1\",\n\"class\": 1,\n\"desc\": null,\n\"link_url\": \"www.albaba.com\",\n\"icon\": \"www.albaba.com\",\n\"state\": 1,\n\"sort_id\": 100,\n\"menu_code\": null\n}\n]\n}\n]\n}\n]\n},\n{\n\"id\": 4,\n\"parent_id\": 0,\n\"title_cn\": \"系统管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"系统管理\",\n\"link_url\": \"/system/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"system\",\n\"_child\": [\n{\n\"id\": 12,\n\"parent_id\": 4,\n\"title_cn\": \"|--白名单管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"白名单管理\",\n\"link_url\": \"system/allow\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"system_allow\"\n},\n{\n\"id\": 13,\n\"parent_id\": 4,\n\"title_cn\": \"|--菜单管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"菜单管理\",\n\"link_url\": \"system/menus\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"system_menus\"\n},\n{\n\"id\": 14,\n\"parent_id\": 4,\n\"title_cn\": \"|--角色管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"角色管理\",\n\"link_url\": \"system/role\",\n\"icon\": \"\",\n\"state\": null,\n\"sort_id\": null,\n\"menu_code\": \"system_role\"\n}\n]\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    code:400,\n    text:'数据列表为空',\n    result:''\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MenusController.php",
    "groupTitle": "Menus",
    "name": "GetMenus"
  },
  {
    "type": "patch",
    "url": "/role/menus{id}",
    "title": "保存修改菜单",
    "description": "<p>保存修改菜单</p>",
    "group": "Menus",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title_cn",
            "description": "<p>菜单的中文名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title_en",
            "description": "<p>菜单的英文名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>菜单的icon图标地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link_url",
            "description": "<p>菜单的url地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sort_id",
            "description": "<p>菜单的排序</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "parent_id",
            "description": "<p>菜单所属父级ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "class",
            "description": "<p>菜单类型分类，0为分类菜单，1为页面菜单，默认为分类菜单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>菜单的描述信息</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/menus/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}\n{\n\"code\": 400,\n\"text\": \"数据错误\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MenusController.php",
    "groupTitle": "Menus",
    "name": "PatchRoleMenusId"
  },
  {
    "type": "post",
    "url": "/role/menus",
    "title": "添加菜单",
    "description": "<p>添加菜单</p>",
    "group": "Menus",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title_cn",
            "description": "<p>菜单的中文名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title_en",
            "description": "<p>菜单的英文名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>菜单的icon图标地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link_url",
            "description": "<p>菜单的url地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sort_id",
            "description": "<p>菜单的排序</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "parent_id",
            "description": "<p>菜单所属父级ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "class",
            "description": "<p>菜单类型分类，0为分类菜单，1为页面菜单，默认为分类菜单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>菜单的描述信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menu_code",
            "description": "<p>菜单的标识符</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/menus"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MenusController.php",
    "groupTitle": "Menus",
    "name": "PostRoleMenus"
  },
  {
    "type": "post",
    "url": "/role/menus/{id}",
    "title": "编辑菜单时获取数据",
    "description": "<p>编辑菜单时获取数据</p>",
    "group": "Menus",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>编辑的菜单id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/menu/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"id\": 11,\n    \"parent_id\": 10,\n    \"title_cn\": \"查询游戏\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"查询游戏\",\n    \"link_url\": \"game_select/list\",\n    \"icon\": \"http://app-loc.dev/\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"game_select\"\n    }\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"菜单不存在\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MenusController.php",
    "groupTitle": "Menus",
    "name": "PostRoleMenusId"
  },
  {
    "type": "delete",
    "url": "/role/deleteGroup/{id}",
    "title": "删除角色组",
    "description": "<p>删除角色组</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/deleteGroup/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"id\": 9\n    }\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    {\n    \"code\": 400,\n    \"text\": \"操作失败\",\n    \"result\": \"\"\n    }\n{\n    \"code\": 400,\n    \"text\": \"该分组下还有子账户，不能进行删除操作，需要解除子账户关联关系后才能进行\",\n    \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "DeleteRoleDeletegroupId"
  },
  {
    "type": "get",
    "url": "/role",
    "title": "角色组列表",
    "description": "<p>获取后台角色组列表</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数,默认10条每页</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"code\": 0,\n           \"text\": \"操作成功\",\n           \"result\": {\n               \"total\": 6,\n               \"per_page\": \"10\",\n               \"current_page\": 1,\n               \"last_page\": 1,\n               \"next_page_url\": null,\n               \"prev_page_url\": null,\n               \"from\": 1,\n               \"to\": 6,\n               \"data\": [\n               {\n                   \"id\": 1,\n                   \"group_name\": \"管理员组\",\n                   \"desc\": \"管理员权限组\",\n                   \"add_time\": \"2017-01-20 15:41:16\",\n                   \"state\": 1\n                   },\n                   {\n                   \"id\": 2,\n                   \"group_name\": \"编辑1组\",\n                   \"desc\": \"编辑1组\",\n                   \"add_time\": \"2017-01-20 15:42:16\",\n                   \"state\": 1\n                   },\n                   {\n                   \"id\": 3,\n                   \"group_name\": \"新的角色分组\",\n                   \"desc\": null,\n                   \"add_time\": \"2017-02-14 13:45:58\",\n                   \"state\": 1\n                   },\n                   {\n                   \"id\": 4,\n                   \"group_name\": \"新的角色分组22\",\n                   \"desc\": \"我是描述22\",\n                   \"add_time\": \"2017-02-14 13:46:30\",\n                   \"state\": 1\n                   },\n                   {\n                   \"id\": 5,\n                   \"group_name\": \"测试分组1\",\n                   \"desc\": \"测试分组描述\",\n                   \"add_time\": \"2017-02-15 16:58:54\",\n                   \"state\": 1\n                   },\n                   {\n                   \"id\": 6,\n                   \"group_name\": \"测试分组2\",\n                   \"desc\": \"测试分组描述\",\n                   \"add_time\": \"2017-02-15 17:00:58\",\n                   \"state\": 1\n                   }\n               ]\n           }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n            code:400,\n            text:'数据列表为空',\n            result:''\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "GetRole"
  },
  {
    "type": "get",
    "url": "/role/accountList",
    "title": "子账户列表",
    "description": "<p>获取后台子账户列表</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数,默认10条每页</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/accountList"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"total\": 4,\n\"per_page\": 10,\n\"current_page\": 1,\n\"last_page\": 1,\n\"next_page_url\": null,\n\"prev_page_url\": null,\n\"from\": 1,\n\"to\": 4,\n\"data\": [\n{\n\"id\": 1,\n\"user_name\": \"chensj\",\n\"desc\": \"陈\",\n\"group_id\": 1,\n\"tel\": \"15013777164\",\n\"account_state\": 3,\n\"add_time\": \"2017-01-20 14:13:09\",\n\"update_time\": \"2017-02-15 17:35:01\",\n\"ip_info\": \"127.0.0.1\"\n},\n{\n\"id\": 2,\n\"user_name\": \"test\",\n\"desc\": null,\n\"group_id\": 0,\n\"tel\": null,\n\"account_state\": 1,\n\"add_time\": \"2017-02-08 17:09:22\",\n\"update_time\": \"2017-02-16 13:44:25\",\n\"ip_info\": null\n},\n{\n\"id\": 3,\n\"user_name\": \"user_name-1\",\n\"desc\": \"这里是描述\",\n\"group_id\": 0,\n\"tel\": null,\n\"account_state\": 1,\n\"add_time\": \"2017-02-15 17:49:52\",\n\"update_time\": \"2017-02-15 17:49:52\",\n\"ip_info\": null,\n\"role_group\": {\n\"group_name\": \"管理员组\"\n}\n},\n{\n\"id\": 4,\n\"user_name\": \"user_name-2\",\n\"desc\": \"这里是描述-2\",\n\"group_id\": 0,\n\"tel\": null,\n\"account_state\": 1,\n\"add_time\": \"2017-02-15 17:50:47\",\n\"update_time\": \"2017-02-15 17:50:47\",\n\"ip_info\": null,\n\"role_group\": {\n\"group_name\": \"管理员组\"\n}\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    code:400,\n    text:'数据列表为空',\n    result:''\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "GetRoleAccountlist"
  },
  {
    "type": "patch",
    "url": "/role/updateAccount/{id}",
    "title": "保存修改子账户权限菜单信息",
    "description": "<p>保存修改子账户权限菜单信息</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "group_id",
            "description": "<p>角色分组ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/updateRole/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"id\": 9\n    }\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "PatchRoleUpdateaccountId"
  },
  {
    "type": "patch",
    "url": "/role/updateRole/{id}",
    "title": "修改角色组权限信息",
    "description": "<p>修改角色组权限信息</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roles",
            "description": "<p>权限菜单数组，格式为 &quot;role&quot; =&gt; ['id-parent_id']</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/updateRole/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"id\": 9\n    }\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "PatchRoleUpdateroleId"
  },
  {
    "type": "post",
    "url": "/role",
    "title": "新增角色组",
    "description": "<p>新增后台角色组操作</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_name",
            "description": "<p>角色分组名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>角色分组描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>角色分组ID,如果是添加操作则为空，编辑操作为对应数据ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n            \"code\": 0,\n            \"text\": \"操作成功\",\n            \"result\": {\n                \"id\": 9\n                }\n            }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 400,\n    \"text\": \"操作失败\",\n    \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "PostRole"
  },
  {
    "type": "post",
    "url": "/role/accountState/{id}",
    "title": "删除、冻结、启用子帐号",
    "description": "<p>删除、冻结、启用子帐号</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "state",
            "description": "<p>状态码 1为正常，2为停用，3为删除</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/accountState/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    {\n    \"code\": 400,\n    \"text\": \"操作失败\",\n    \"result\": \"\"\n    }\n{\n    \"code\": 400,\n    \"text\": \"数据错误\",\n    \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "PostRoleAccountstateId"
  },
  {
    "type": "post",
    "url": "/role/addAccount",
    "title": "新增子帐号",
    "description": "<p>新增后台子帐号操作</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>子帐号名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>子帐号密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>密码确认</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>id 子账号ID,如果是添加操作则为空，编辑操作为对应数据ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/addAccount"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"id\": 5\n    }\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "PostRoleAddaccount"
  },
  {
    "type": "post",
    "url": "/role/editPwd/{id}",
    "title": "子帐号修改密码操作",
    "description": "<p>后台子帐号修改密码操作</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>子帐号密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>密码确认</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/editPwd/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"id\": 5\n    }\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}\n {\n\"code\": 400,\n\"text\": \"数据错误\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "PostRoleEditpwdId"
  },
  {
    "type": "post",
    "url": "/role/showMenus/{id}",
    "title": "编辑角色权限时，获取菜单数据",
    "description": "<p>编辑角色权限时，获取菜单数据</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>编辑的角色分组id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/showMenus/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"allRole\": [\n    {\n    \"id\": 1,\n    \"parent_id\": 0,\n    \"title_cn\": \"账号管理\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"账号管理\",\n    \"link_url\": \"/account/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"account\",\n    \"isHaveRole\": 1,\n    \"_child\": [\n    {\n    \"id\": 5,\n    \"parent_id\": 1,\n    \"title_cn\": \"厅主管理\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"厅主管理\",\n    \"link_url\": \"/haller/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"haller\",\n    \"isHaveRole\": 0\n    },\n    {\n    \"id\": 6,\n    \"parent_id\": 1,\n    \"title_cn\": \"代理管理管理\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"代理\",\n    \"link_url\": \"/agent/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"agent\",\n    \"isHaveRole\": 0\n    },\n    {\n    \"id\": 7,\n    \"parent_id\": 1,\n    \"title_cn\": \"玩家管理\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"玩家管理\",\n    \"link_url\": \"/player/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"palyer\",\n    \"isHaveRole\": 0\n    }\n    ]\n    },\n    {\n    \"id\": 2,\n    \"parent_id\": 0,\n    \"title_cn\": \"游戏管理\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"游戏管理\",\n    \"link_url\": \"/game/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"game\",\n    \"isHaveRole\": 1,\n    \"_child\": [\n    {\n    \"id\": 8,\n    \"parent_id\": 2,\n    \"title_cn\": \"游戏列表\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"游戏列表\",\n    \"link_url\": \"/games/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"games\",\n    \"isHaveRole\": 0\n    },\n    {\n    \"id\": 9,\n    \"parent_id\": 2,\n    \"title_cn\": \"游戏限额\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"游戏限额\",\n    \"link_url\": \"games/limit\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"games_limit\",\n    \"isHaveRole\": 0\n    }\n    ]\n    },\n    {\n    \"id\": 3,\n    \"parent_id\": 0,\n    \"title_cn\": \"报表统计\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"报表统计\",\n    \"link_url\": \"/report/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"report\",\n    \"isHaveRole\": 1,\n    \"_child\": [\n    {\n    \"id\": 10,\n    \"parent_id\": 3,\n    \"title_cn\": \"游戏数据统计\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"游戏数据统计\",\n    \"link_url\": \"game_report/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"game_report\",\n    \"isHaveRole\": 0,\n    \"_child\": [\n    {\n    \"id\": 11,\n    \"parent_id\": 10,\n    \"title_cn\": \"查询游戏\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"查询游戏\",\n    \"link_url\": \"game_select/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"game_select\",\n    \"isHaveRole\": 0,\n    \"_child\": [\n    {\n    \"id\": 26,\n    \"parent_id\": 11,\n    \"title_cn\": \"开始了22\",\n    \"title_en\": \"abc\",\n    \"class\": 1,\n    \"desc\": null,\n    \"link_url\": \"www.baidu.com\",\n    \"icon\": \"www.baidu.com\",\n    \"state\": 1,\n    \"sort_id\": 100,\n    \"menu_code\": null,\n    \"isHaveRole\": 0\n    },\n    {\n    \"id\": 28,\n    \"parent_id\": 11,\n    \"title_cn\": \"开始了\",\n    \"title_en\": \"abc\",\n    \"class\": 1,\n    \"desc\": null,\n    \"link_url\": \"www.baidu.com\",\n    \"icon\": \"www.baidu.com\",\n    \"state\": 1,\n    \"sort_id\": 100,\n    \"menu_code\": null,\n    \"isHaveRole\": 0\n    }\n    ]\n    }\n    ]\n    }\n    ]\n    },\n    {\n    \"id\": 4,\n    \"parent_id\": 0,\n    \"title_cn\": \"系统管理\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"系统管理\",\n    \"link_url\": \"/system/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"system\",\n    \"isHaveRole\": 1,\n    \"_child\": [\n    {\n    \"id\": 12,\n    \"parent_id\": 4,\n    \"title_cn\": \"白名单管理\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"白名单管理\",\n    \"link_url\": \"system/allow\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"system_allow\",\n    \"isHaveRole\": 0\n    },\n    {\n    \"id\": 13,\n    \"parent_id\": 4,\n    \"title_cn\": \"菜单管理\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"菜单管理\",\n    \"link_url\": \"system/menus\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"system_menus\",\n    \"isHaveRole\": 0\n    },\n    {\n    \"id\": 14,\n    \"parent_id\": 4,\n    \"title_cn\": \"角色管理\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"角色管理\",\n    \"link_url\": \"system/role\",\n    \"icon\": \"\",\n    \"state\": null,\n    \"sort_id\": null,\n    \"menu_code\": \"system_role\",\n    \"isHaveRole\": 0\n    }\n    ]\n    }\n    ]\n    }\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "PostRoleShowmenusId"
  },
  {
    "type": "post",
    "url": "/role/showSubMenus/{id}",
    "title": "编辑子帐号权限时，获取菜单数据",
    "description": "<p>编辑子帐号权限时，获取菜单数据</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>编辑的子帐号id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/showSubMenus/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": [\n    {\n    \"id\": 1,\n    \"group_name\": \"管理员组\",\n    \"isHaveRole\": 0,\n    \"roles\": [\n    {\n    \"id\": 22,\n    \"role_id\": 1,\n    \"menu_id\": 1,\n    \"parent_id\": 0,\n    \"isHaveRole\": 1,\n    \"_child\": [\n    {\n    \"id\": 23,\n    \"role_id\": 1,\n    \"menu_id\": 2,\n    \"parent_id\": 1,\n    \"isHaveRole\": 1,\n    \"_child\": [\n    {\n    \"id\": 24,\n    \"role_id\": 1,\n    \"menu_id\": 3,\n    \"parent_id\": 2,\n    \"isHaveRole\": 1,\n    \"_child\": [\n    {\n    \"id\": 25,\n    \"role_id\": 1,\n    \"menu_id\": 4,\n    \"parent_id\": 3,\n    \"isHaveRole\": 1\n    }\n    ]\n    }\n    ]\n    }\n    ]\n    }\n    ]\n    },\n    {\n    \"id\": 2,\n    \"group_name\": \"编辑1组\",\n    \"roles\": []\n    },\n    {\n    \"id\": 3,\n    \"group_name\": \"新的角色分组\",\n    \"roles\": []\n    },\n    {\n    \"id\": 4,\n    \"group_name\": \"新的角色分组22\",\n    \"roles\": []\n    },\n    {\n    \"id\": 5,\n    \"group_name\": \"测试分组1\",\n    \"roles\": []\n    },\n    {\n    \"id\": 6,\n    \"group_name\": \"测试分组2\",\n    \"roles\": []\n    },\n    {\n    \"id\": 9,\n    \"group_name\": \"新的测试分组\",\n    \"roles\": []\n    }\n    ]\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"数据列表为空\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "PostRoleShowsubmenusId"
  },
  {
    "type": "delete",
    "url": "/gameTemplate/{id}",
    "title": "删除风格模板",
    "description": "<p>删除风格模板</p>",
    "group": "Template",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameTemplateController.php",
    "groupTitle": "Template",
    "name": "DeleteGametemplateId"
  },
  {
    "type": "get",
    "url": "/gameTemplate",
    "title": "风格模板列表",
    "description": "<p>风格模板列表</p>",
    "group": "Template",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>模板标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>模板启用状态，0为未启用，1为启用，默认为0</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页 默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": {\n        \"total\": 1,\n        \"per_page\": \"10\",\n        \"current_page\": 1,\n        \"last_page\": 1,\n        \"next_page_url\": null,\n        \"prev_page_url\": null,\n        \"from\": 1,\n        \"to\": 1,\n        \"data\": [\n        {\n        \"id\": 2,//模板id\n        \"title\": \"模板test\",//模板标题\n        \"desc\": \"这是描述\",//模板说明\n        \"label\": 0,//所属平台：0为PC，1为手机横版，2为手机竖版\n        \"code\": \"bbb\",//模板代码\n        \"state\": 0,'//模板启用状态，0为未启用，1为启用，默认为0'\n        \"add_date\": \"2017-04-11 15:33:04\"//添加时间\n        }\n        ]\n        }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameTemplateController.php",
    "groupTitle": "Template",
    "name": "GetGametemplate"
  },
  {
    "type": "get",
    "url": "/gameTemplate/{id}",
    "title": "风格模板详情",
    "description": "<p>风格模板详情</p>",
    "group": "Template",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"id\": 2,//模板id\n\"title\": \"模板test\",//模板标题\n\"desc\": \"这是描述\",//模板描述说明\n\"label\": 0,//所属平台,0为PC，1为手机横版，2为手机竖版\n\"code\": \"bbb\",//模板代码\n\"state\": 0,//模板启用状态，0为未启用，1为启用，默认为0\n\"add_date\": \"2017-04-11 15:33:04\",//添加时间\n\"images\": [//模板图片\n{\n\"img\": \"images/2017-03-01-14-21-02-58b6684ecc36e.jpg\"//相对路径\n\"full_img\": \"http://platform.dev/images/2017-03-01-14-21-02-58b6684ecc36e.jpg\"//全路径\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameTemplateController.php",
    "groupTitle": "Template",
    "name": "GetGametemplateId"
  },
  {
    "type": "patch",
    "url": "gameTemplate/{id}/agent/{a_id}",
    "title": "厅主选模板",
    "description": "<p>厅主选模板保存</p>",
    "group": "Template",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameTemplateController.php",
    "groupTitle": "Template",
    "name": "PatchGametemplateIdAgentA_id"
  },
  {
    "type": "post",
    "url": "/gameTemplate",
    "title": "添加风格模板",
    "description": "<p>添加风格模板列表</p>",
    "group": "Template",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>模板标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>模板风格代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>模板说明</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "label",
            "description": "<p>所属平台,0为PC，1为手机横版，2为手机竖版</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "images",
            "description": "<p>模板图片 数组格式 ['','']</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameTemplateController.php",
    "groupTitle": "Template",
    "name": "PostGametemplate"
  },
  {
    "type": "put",
    "url": "/gameTemplate/{id}",
    "title": "编辑风格模板",
    "description": "<p>编辑风格模板</p>",
    "group": "Template",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>模板标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>模板风格代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>模板说明</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "label",
            "description": "<p>所属平台,0为PC，1为手机横版，2为手机竖版</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "images",
            "description": "<p>模板图片 数组格式 ['','']</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameTemplateController.php",
    "groupTitle": "Template",
    "name": "PutGametemplateId"
  },
  {
    "type": "get",
    "url": "/abnormalList",
    "title": "重新派彩数据列表",
    "description": "<p>获取重新派彩数据列表</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "round_no",
            "description": "<p>局ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1：是，0：否 ，默认1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n \"code\": 0,\n \"text\": \"操作成功\",\n \"result\": {\n \"total\": 1,\n \"per_page\": 10,\n \"current_page\": 1,\n \"last_page\": 1,\n \"next_page_url\": null,\n \"prev_page_url\": null,\n \"from\": 1,\n \"to\": 1,\n \"data\": [\n {\n \"round_no\": \"d79c74f64a408118\", //局ID\n \"table_no\": \"B01\", //桌号\n \"game_name\": \"百家乐\", //游戏名称\n \"game_hall_code\": \"GH0001\"\n \"game_result\": \"5;1\", //游戏结果\n \"is_responsed\": 0 //是否派彩\n }\n ]\n }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PayoutController.php",
    "groupTitle": "account",
    "name": "GetAbnormallist"
  },
  {
    "type": "get",
    "url": "/admin/player",
    "title": "玩家管理员列表",
    "description": "<p>玩家管理员列表</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名，玩家在第三方平台账号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "uid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_add_time",
            "description": "<p>注册开始时间 2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_add_time",
            "description": "<p>注册结束时间 2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account_state",
            "description": "<p>状态 账号状态,1为正常,2为暂停使用,3为停用,4为逻辑删除</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 0否，1是，默认1分页</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"total\": 1,\n\"per_page\": 10,\n\"current_page\": 1,\n\"last_page\": 1,\n\"next_page_url\": null,\n\"prev_page_url\": null,\n\"from\": 1,\n\"to\": 1,\n\"data\": [\n{\n\"uid\": 1,\n\"user_name\": \"csj_play\",\n\"username_md\": \"csj_play_3\",\n\"alias\": \"我来也\",\n\"hall_id\": 1,\n\"agent_id\": 0,\n\"add_date\": \"2017-01-20 15:07:03\",\n\"account_state\": 1\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "GetAdminPlayer"
  },
  {
    "type": "get",
    "url": "/getRollbackList",
    "title": "回退下注金额列表数据",
    "description": "<p>回退下注金额列表数据</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1：是，0：否 ，默认1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n \"code\": 0,\n \"text\": \"操作成功\",\n \"result\": {\n \"total\": 1,\n \"per_page\": 10,\n \"current_page\": 1,\n \"last_page\": 1,\n \"next_page_url\": null,\n \"prev_page_url\": null,\n \"from\": 1,\n \"to\": 1,\n \"data\": [\n {\n \"_id\": {\n \"$oid\": \"5a55cfaee138232b3c1dbdd3\"\n },\n \"user_id\": 1761863,\n \"user_name\": \"114game662lebo\",  //登录名\n \"agent_id\": 600,\n \"agent_name\": \"lebo98095\",\n \"money\": 100,  //下注金额\n \"remark\": \"backspace_addgold\",\n \"insert_id\": \"5a55cf95e138232b3c1dbdd2\",\n \"oper_code\": 3,\n \"game_hall_code\": \"GH0001\",  //游戏厅CODE\n \"game_name\": \"百家乐\",  //游戏名称\n \"table_no\": \"B02\",  //桌号\n \"is_responsed\": 0   //状态 0为异常\n },\n ]\n }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PayoutController.php",
    "groupTitle": "account",
    "name": "GetGetrollbacklist"
  },
  {
    "type": "get",
    "url": "/hall/games",
    "title": "游戏种类&游戏厅",
    "description": "<p>获取游戏厅游戏种类&amp;游戏厅</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "only_hall",
            "description": "<p>1：只获取厅数据，0：获取游戏种类和厅，默认为0</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n            \"code\": 0,\n            \"text\": \"ok\",\n            \"result\": {\n                \"data\": [\n                    {\n                        \"id\": 1,\n                        \"title\": \"旗舰厅\",\n                        \"desc\": \"旗舰厅\",\n                        \"games\": [\n                            {\n                                \"id\": 88,\n                                \"cat_id\": 1,\n                                \"game_name\": \"龙虎百家乐\",\n                                \"sort_id\": 1,\n                                \"status\": 1,\n                                \"pivot\": {\n                                \"hall_id\": 1,\n                                \"game_id\": 88\n                            }\n                        ]\n                    }\n                ]\n            }\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameHallController.php",
    "groupTitle": "account",
    "name": "GetHallGames"
  },
  {
    "type": "get",
    "url": "/player",
    "title": "玩家管理列表",
    "description": "<p>玩家管理列表</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名，玩家在第三方平台账号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "uid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_add_time",
            "description": "<p>注册开始时间 2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_add_time",
            "description": "<p>注册结束时间 2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account_state",
            "description": "<p>状态 账号状态,1为正常,2为暂停使用,3为停用,4为逻辑删除</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 0否，1是，默认1分页</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n     {\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": {\n        \"total\": 1,\n        \"per_page\": 10,\n        \"current_page\": 1,\n        \"last_page\": 1,\n        \"next_page_url\": null,\n        \"prev_page_url\": null,\n        \"from\": 1,\n        \"to\": 1,\n        \"data\": [\n            {\n                \"uid\": 1,\n                \"user_name\": \"csj_play\",\n                \"username_md\": \"csj_play_3\",\n                \"alias\": \"我来也\",\n                \"hall_id\": 1,\n                \"agent_id\": 0,\n                \"add_date\": \"2017-01-20 15:07:03\",\n                \"account_state\": 1,\n                \"connect_mode\": 1, //值为1则为共享钱包模式\n            }\n        ]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "GetPlayer"
  },
  {
    "type": "get",
    "url": "/player/order",
    "title": "注单查询",
    "description": "<p>注单查询（查user_chart_info表）</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>玩家id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>玩家登录名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "game_hall_id",
            "description": "<p>游戏厅ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "round_no",
            "description": "<p>局ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态 1：未取消未派彩，2：未取消已派彩，3：已取消未派彩，4：已取消已派彩</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_add_time",
            "description": "<p>下注开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_add_time",
            "description": "<p>下注结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "connect_mode",
            "description": "<p>扣费模式：'':全部，0:额度转换，1：共享钱包</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是，0否</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回结果:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n    \"total\": 1,\n    \"per_page\": 10,\n    \"current_page\": 1,\n    \"last_page\": 1,\n    \"next_page_url\": null,\n    \"prev_page_url\": null,\n    \"from\": 1,\n    \"to\": 1,\n    \"data\": [\n        {\n            \"_id\": \"5979ce73e138231a1e43e1f0\",//记录id\n            \"total_bet_score\": \"1,000.00\",//投注额\n            \"total_win_score\": \"0.00\",//派彩额\n            \"valid_bet_score_total\": \"1,000.00\",//有效投注额\n            \"cat_id\": 1,//游戏分类id\n            \"start_time\": \"2017-07-27 07:28:51\",//开始时间（下注时间）\n            \"server_name\": \"15\",//桌号\n            \"is_cancel\": 1,//是否取消，0：否，1：是\n            \"round_no\": \"6638b3a2e92a09d1\",//局ID\n            \"game_period\": \"67-23\",//靴-局信息\n            \"dwRound\": 23,//局信息\n            \"remark\": \"1;35\",//牌信息（游戏结果）\n            \"account\": \"D01shenwenzhong\",//玩家登录名\n            \"is_mark\": 1,//是否派彩,0：否，1：是\n            \"game_hall_code\": \"GH0001\",//游戏厅标识码\n            \"game_name\": \"龙虎 \",//游戏名称\n            \"ip_info\": \"\",//IP\n            \"game_result\": '',//游戏结果\n            \"is_rollback\": 0//是否回滚，0：否，1：是\n            \"connect_mode\" :0 //扣费模式：0为额度转换，1为共享钱包，默认为0\n        }\n    ],\n    \"total_score\": {//小计\n        \"total_bet_score\": \"500\",//总投注额\n        \"valid_bet_score_total\": \"500\",//总有效投注额\n        \"total_win_score\": \"0\"//总派彩金额\n    },\n    \"all_total_score\": {//总计\n    \"total_bet_score\": \"500\",//总投注额\n    \"valid_bet_score_total\": \"500\",//总有效投注额\n    \"total_win_score\": \"0\"//总派彩金额\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "GetPlayerOrder"
  },
  {
    "type": "get",
    "url": "/player/order/{account}/{round_no}",
    "title": "查看注单详情结果",
    "description": "<p>查看注单详情结果 account：玩家登录名，round_no:局ID</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"round_no\": \"f20b7f4872e61148\",//局id\n\"server_name\": \"17\",//桌号\n\"add_time\": \"2017-07-05 01:52:49\",//下注时间\n\"remark\": \"23\",//牌信息\n\"cat_id\": 2,//游戏分类ID\n\"game_result\": \"23\",//游戏结果\n\"game_period\": \"876-104\",//靴+局\n\"total\": {\n\"bet_money\": \"1,800.00\",//总下注金额\n\"bet_money_valid\": \"1,800.00\",//总有效下注金额\n\"payout_win\": \"-1,800.00\"//总派彩金额\n},\n\"data\": [\n{\n\"odds\": 36,//赔率\n\"bet_money\": \"200.00\",//下注金额\n\"bet_money_valid\": \"200.00\",//有效下注金额\n\"payout_win\": \"-200.00\",//派彩金额\n\"bet_type\": 157,//下注类型\n\"cat_id\": 2//游戏分类ID\n\"game_hall_id\": 2//游戏厅ID\n\"game_id\": 2//游戏ID\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "GetPlayerOrderAccountRound_no"
  },
  {
    "type": "get",
    "url": "/player/{user_id}/balance",
    "title": "查询玩家余额",
    "description": "<p>查询玩家余额</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": {\n            \"balance\": {\n                \"uid\": 191,\n                \"money\": \"2000.00\",\n                \"username_md\": \"111111\",\n                \"add_date\": \"2017-02-06 15:17:08\",\n                \"last_update_time\": \"2017-02-07 13:59:45\"\n            }\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "GetPlayerUser_idBalance"
  },
  {
    "type": "get",
    "url": "/player/{user_id}/getUserBalance",
    "title": "查询玩家余额（共享钱包）",
    "description": "<p>查询玩家余额（共享钱包）</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"data\": {\n\"balance\": 54172\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "GetPlayerUser_idGetuserbalance"
  },
  {
    "type": "patch",
    "url": "/player/{id}/onLine",
    "title": "玩家登出",
    "description": "<p>玩家登出</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "PatchPlayerIdOnline"
  },
  {
    "type": "patch",
    "url": "/player/{id}/status",
    "title": "修改玩家状态",
    "description": "<p>修改玩家状态（1启用、2冻结、3停用、4登出）</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account_state",
            "description": "<p>状态值 1启用、2冻结、3停用</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "PatchPlayerIdStatus"
  },
  {
    "type": "post",
    "url": "/player",
    "title": "添加玩家",
    "description": "<p>添加玩家</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>登录名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alias",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_md",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_md_confirmation",
            "description": "<p>确认密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_name",
            "description": "<p>直属代理名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_state",
            "description": "<p>账号状态,1为正常,2为暂停使用,3为停用,4为逻辑删除</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "PostPlayer"
  },
  {
    "type": "post",
    "url": "/player/order/bulkCancelOrder",
    "title": "注单取消（一键取消+单条取消）",
    "description": "<p>注单取消</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "round_no",
            "description": "<p>局号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>备注信息 desc</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "PostPlayerOrderBulkcancelorder"
  },
  {
    "type": "post",
    "url": "/player/order/cancelOrder",
    "title": "(无效接口)注单取消（单局+单用户）",
    "description": "<p>注单取消</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "round_no",
            "description": "<p>游戏局号 round_no</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户登录名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>备注信息 desc</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "PostPlayerOrderCancelorder"
  },
  {
    "type": "post",
    "url": "/player/order/rollbackOrder",
    "title": "（无效接口）注单回滚",
    "description": "<p>注单回滚</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>注单数据 _id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "PostPlayerOrderRollbackorder"
  },
  {
    "type": "post",
    "url": "/player/{user_id}",
    "title": "编辑玩家时获取数据",
    "description": "<p>编辑玩家时获取数据</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": {\n        \"data\": {\n        \"uid\": 191,\n        \"user_name\": \"\",\n        \"username_md\": \"111111\",\n        \"password_mb_c\": null,\n        \"password_mb_s\": \"\",\n        \"alias\": \"人生玩家\",\n        \"add_date\": \"2017-02-06 07:17:08\",\n        \"create_time\": \"0000-00-00 00:00:00\",\n        \"last_time\": \"0000-00-00 00:00:00\",\n        \"add_ip\": \"127.0.0.1\",\n        \"ip_info\": \"0.0.0.0\",\n        \"on_line\": \"N\",\n        \"account_state\": 1,\n        \"hall_id\": 1,\n        \"agent_id\": 2,\n        \"hall_name\": \"csj\",\n        \"agent_name\": \"c112\",\n        \"mapping\": null,\n        \"profit_share_platform\": null,\n        \"profit_share_agent\": \"0\",\n        \"profit_share_hall\": \"0\",\n        \"money\": null,\n        \"token_id\": null,\n        \"is_test\": 0,\n        \"language\": \"zh-cn\"\n        }\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "PostPlayerUser_id"
  },
  {
    "type": "post",
    "url": "/player/{user_id}balance",
    "title": "玩家余额扣取（充值）",
    "description": "<p>查询玩家余额</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "money",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>加减状态，3是加，4是减</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n     {\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n    \"code\": 400,\n    \"text\": {\n    \"status\": [\n    \"status 不能为空。\"\n    ]\n    },\n    \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "PostPlayerUser_idBalance"
  },
  {
    "type": "post",
    "url": "/player/{user_id}/password",
    "title": "修改玩家密码",
    "description": "<p>修改玩家密码</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_md",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_md_confirmation",
            "description": "<p>确认密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n    \"code\": 0,\n    \"text\": \"保存成功\",\n    \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "PostPlayerUser_idPassword"
  },
  {
    "type": "post",
    "url": "/refresh",
    "title": "重新派彩操作",
    "description": "<p>重新派彩操作</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "round_no",
            "description": "<p>局ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n \"code\": 0,\n \"text\": \"操作成功\",\n \"result\": \"\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PayoutController.php",
    "groupTitle": "account",
    "name": "PostRefresh"
  },
  {
    "type": "post",
    "url": "/rollbackMoney",
    "title": "重新回退下注金额操作",
    "description": "<p>重新回退下注金额操作</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "insert_id",
            "description": "<p>insert_id数组，例如['5a55d068e138232b3c1dbdda','55a55d36ae138233eb63a6906']</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n \"code\": 0,\n \"text\": \"操作成功\",\n \"result\": \"\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PayoutController.php",
    "groupTitle": "account",
    "name": "PostRollbackmoney"
  },
  {
    "type": "put",
    "url": "/player/{id}",
    "title": "编辑玩家",
    "description": "<p>编辑玩家</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_state",
            "description": "<p>账号状态,1为正常,2为暂停使用,3为停用,4为逻辑删除</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "PutPlayerId"
  },
  {
    "type": "get",
    "url": "agent/menu/{grade_id}",
    "title": "获取代理商菜单权限列表数据",
    "description": "<p>获代理商菜单权限 grade_id：代理商级别，1：厅主，2：代理商</p>",
    "group": "agent",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "agent_id",
            "description": "<p>代理商id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"data\": [\n{\n\"id\": 1,\n\"parent_id\": 0,\n\"title_cn\": \"账号管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": null,\n\"link_url\": \"/accountManage\",\n\"icon\": \"icon-guanli\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"M1001\",\n\"update_date\": null,\n\"is_have\": 1,\n\"_child\": [\n    {\n    \"id\": 2,//菜单id\n    \"parent_id\": 1,//上级菜单id\n    \"title_cn\": \"代理商管理\",\n    \"title_en\": \"\",\n    \"class\": 0,//菜单类型分类，0为通用菜单，1为厅主类菜单，2为代理类菜单，默认为0通用菜单\n    \"desc\": null,\n    \"link_url\": \"/accountManage/AgentM\",\n    \"icon\": \"icon-zuanshi\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"M1003\",\n    \"update_date\": \"2017-05-11 04:40:32\",\n    \"is_have\": 1,//是否选中 1是，0否\n    \"_child\": [\n            {\n                \"id\": 33,\n                \"parent_id\": 2,\n                \"title_cn\": \"添加代理商\",\n                \"title_en\": \"\",\n                \"class\": 0,\n                \"desc\": null,\n                \"link_url\": \"/accountManage/AgentM/Add\",\n                \"icon\": \"\",\n                \"state\": 1,\n                \"sort_id\": 1,\n                \"menu_code\": null,\n                \"update_date\": \"2017-07-14 11:11:28\",\n                \"is_have\": 1\n            }\n        ]\n    }\n    ]\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentController.php",
    "groupTitle": "agent",
    "name": "GetAgentMenuGrade_id"
  },
  {
    "type": "get",
    "url": "/agent_/connectMode/",
    "title": "检测厅主下面玩家是否有余额",
    "description": "<p>当扣费模式改变时，检测厅主下面玩家是否有余额</p>",
    "group": "agent",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hall_id",
            "description": "<p>厅主id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "connect_mode",
            "description": "<p>扣费模式 0:额度转换，1:共享钱包</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式:",
          "content": "{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "400错误返回格式:",
          "content": "{\n\"code\": 400,\n\"text\": \"\",\n\"result\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "4001错误 检测到厅主下面玩家有余额:",
          "content": "{\n\"code\": 4001,\n\"text\": \"\",\n\"result\": {\n\"num\": 12007,//会员数\n\"filename\": \"excel/n1api005_userInfo.csv\",//文件名\n\"url\": \"http://platform.dev/excel/n1api005_userInfo.csv\"//会员信息csv文件下载地址\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentController.php",
    "groupTitle": "agent",
    "name": "GetAgent_Connectmode"
  },
  {
    "type": "get",
    "url": "/agents/{grade_id}",
    "title": "厅主（代理商）列表",
    "description": "<p>获取厅主（代理商）列表 grade_id:代理级别，总代（厅主）则为1，2为二级代理</p>",
    "group": "agent",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_lock",
            "description": "<p>是否锁定,1锁定,0不锁定</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "start_add_time",
            "description": "<p>开始时间 2017-04-20 16:11:25</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "end_add_time",
            "description": "<p>结束时间 2017-04-20 16:11:25</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1：是，0：否 ，默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "show_all",
            "description": "<p>展示所有类型的代理商 1：是，0：否 默认为否</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n            \"code\": 0,\n            \"text\": \"ok\",\n            \"result\": {\n                \"total\": 2,\n                \"per_page\": 1,\n                \"current_page\": 1,\n                \"last_page\": 2,\n                \"next_page_url\": \"http://app-loc.dev/api/agents/1?page=2\",\n                \"prev_page_url\": null,\n                \"from\": 1,\n                \"to\": 1,\n                \"data\": [\n                    {\n                    \"id\": 1,\n                    \"user_name\": \"csj\",\n                    \"real_name\": \"陈松坚\",\n                    \"desc\": \"厅主\",\n                    \"grade_id\": 1,\n                    \"tel\": \"15013777164\",\n                    \"account_state\": 1,\n                    \"add_time\": \"2017-01-20 06:55:32\",\n                    \"update_time\": \"2017-01-20 07:03:51\",\n                    \"ip_info\": \"127.0.0.1\",\n                    \"parent_id\": 0,\n                    \"mapping\": null,\n                    \"sub_count\": 1,\n                    \"area\": \"中国\",\n                    \"tel_pre\": \"86\",\n                    \"email\": \"184444444@qq.com\",\n                    \"account_lock\": 0,\n                    \"lock_rank\": null,\n                    \"charge_mode\": 1,\n                    \"charge_fixed\": 500,\n                    \"charge_percentage\": 20,\n                    \"time_zone\": \"(GMT+08:00) Asia / Beijing\",\n                    \"lang_code\": \"zh_cn\",\n                    \"sub_user\": 0,\n                    \"lock_reason\": \"\",\n                    \"account_type\": 1,//1为正式账号，2为测试账号\n                    \"agent_code\": \"csj\"\n                    \"connect_mode\": 0 //厅主对接方式，0为额度转换，1为共享钱包，默认为0\n                    }\n                ]\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentController.php",
    "groupTitle": "agent",
    "name": "GetAgentsGrade_id"
  },
  {
    "type": "delete",
    "url": "/agent/message/{id}",
    "title": "删除厅主公告",
    "description": "<p>删除厅主公告</p>",
    "group": "agentMessage",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentMessageController.php",
    "groupTitle": "agentMessage",
    "name": "DeleteAgentMessageId"
  },
  {
    "type": "get",
    "url": "/agent/message",
    "title": "厅主公告列表",
    "description": "<p>厅主公告列表</p>",
    "group": "agentMessage",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态 '':全部，0：禁用，1：启用</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>当前第几页 默认1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"total\": 3,\n\"per_page\": \"10\",\n\"current_page\": 1,\n\"last_page\": 1,\n\"next_page_url\": null,\n\"prev_page_url\": null,\n\"from\": 1,\n\"to\": 3,\n\"data\": [\n{\n\"id\": 3,\n\"message\": \"content test \",//公告内容\n\"start_date\": \"2017-10-13 03:48:56\",//开始时间\n\"end_date\": \"2017-10-13 05:55:55\",//结束时间\n\"create_date\": \"2017-10-13 04:48:08\",//创建时间\n\"status\": 1//状态 1：启用中 ，0：未启用\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentMessageController.php",
    "groupTitle": "agentMessage",
    "name": "GetAgentMessage"
  },
  {
    "type": "get",
    "url": "/agent/message/{id}",
    "title": "获取厅主公告内容",
    "description": "<p>编辑时获取厅主公告内容</p>",
    "group": "agentMessage",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"id\": 1,\n\"message\": \"edit content test\",\n\"start_date\": \"2017-10-13 04:48:56\",\n\"end_date\": \"2017-10-14 04:48:56\",\n\"create_date\": \"2017-10-13 04:36:06\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentMessageController.php",
    "groupTitle": "agentMessage",
    "name": "GetAgentMessageId"
  },
  {
    "type": "post",
    "url": "/agent/message",
    "title": "添加厅主公告",
    "description": "<p>添加厅主公告</p>",
    "group": "agentMessage",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>公告内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentMessageController.php",
    "groupTitle": "agentMessage",
    "name": "PostAgentMessage"
  },
  {
    "type": "put",
    "url": "/agent/message/{id}",
    "title": "保存厅主公告",
    "description": "<p>保存厅主公告</p>",
    "group": "agentMessage",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>公告内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentMessageController.php",
    "groupTitle": "agentMessage",
    "name": "PutAgentMessageId"
  },
  {
    "type": "patch",
    "url": "/agent/{agent_id}/grade/{grade_id}/emailTel",
    "title": "修改手机&邮箱",
    "description": "<p>修改手机&amp;邮箱 {agent_id}:代理id,{grade_id}:代理级别 ，1：厅主，2：代理</p>",
    "group": "agent",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel_pre",
            "description": "<p>手机国家代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号 *</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentController.php",
    "groupTitle": "agent",
    "name": "PatchAgentAgent_idGradeGrade_idEmailtel"
  },
  {
    "type": "patch",
    "url": "/agent/{agent_id}/grade/{grade_id}/locking",
    "title": "修改锁定状态&原因",
    "description": "<p>修改锁定状态&amp;原因 {agent_id}:代理id,{grade_id}:代理级别 ，1：厅主，2：代理</p>",
    "group": "agent",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account_lock",
            "description": "<p>锁定 1：锁定 0不锁定*</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lock_reason",
            "description": "<p>锁定原因</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentController.php",
    "groupTitle": "agent",
    "name": "PatchAgentAgent_idGradeGrade_idLocking"
  },
  {
    "type": "post",
    "url": "/agent/{agent_id}/menus",
    "title": "保存代理商菜单权限",
    "description": "<p>代理商编辑菜单权限 agent_id:代理商id</p>",
    "group": "agent",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "menus",
            "description": "<p>['2-1','33-2']['id-parent_id']</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentController.php",
    "groupTitle": "agent",
    "name": "PostAgentAgent_idMenus"
  },
  {
    "type": "post",
    "url": "/agent/grade/{grade_id}",
    "title": "添加厅主代理(新)",
    "description": "<p>添加厅主代理 {grade_id}:代理级别 ，1：厅主，2：代理</p>",
    "group": "agent",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>运营地区 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time_zone",
            "description": "<p>时区 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>登录名 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "real_name",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parent_name",
            "description": "<p>上级代理名称（添加代理商时必须 *）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_code",
            "description": "<p>代理商code，做为代理商玩家用户名前缀（添加代理商时必须 *）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel_pre",
            "description": "<p>手机国家代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>确认密码 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account_lock",
            "description": "<p>是否锁定 1为永久锁定,0为未锁定</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lock_reason",
            "description": "<p>锁定原因</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "connect_mode",
            "description": "<p>厅主对接方式，0为额度转换，1为共享钱包，默认为0</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "show_delivery",
            "description": "<p>针对厅主，是否显示厅主交收统计  0：不显示，1：显示 ，默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_type",
            "description": "<p>账号种类,1为正常账号,2为测试账号，3为联调账号，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "games",
            "description": "<p>游戏种类 [ &quot;91-0-0&quot;, &quot;93-0-0&quot;, &quot;94-0-0&quot;, &quot;95-0-0&quot; ]</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "menus",
            "description": "<p>菜单数据格式 [id-parent_id] [ &quot;91-0&quot;, &quot;93-0&quot;, ]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "t_id",
            "description": "<p>风格模板id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameScale",
            "description": "<p>游戏分成 [ { &quot;start_profit&quot;: &quot;0.00&quot;,//毛利润开始值 &quot;end_profit&quot;: &quot;100.00&quot;,//毛利润结束值 &quot;scale&quot;: &quot;30&quot;//站成比例，单位：% } ]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameCost",
            "description": "<p>游戏费用 { &quot;roundot&quot;: &quot;30000.00&quot;,//包网费 &quot;line_map&quot;: &quot;30000.00&quot;,//线路图 &quot;upkeep&quot;: &quot;30000.00&quot;,//维护费用 &quot;ladle_bottom&quot;: &quot;30000.00&quot;//包底 }</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n        \"code\": 0,\n        \"text\": \"保存成功\",\n        \"result\": \"\"\n        }",
          "type": "json"
        },
        {
          "title": "games 游戏种类 数据格式",
          "content": "[\n\"91-0-0\",\n\"93-0-0\",\n\"94-0-0\",\n\"95-0-0\"\n]",
          "type": "json"
        },
        {
          "title": "menus 菜单权限 数据格式",
          "content": "[\n\"91-0\",//id-parent_id\n\"93-0\"\n]",
          "type": "json"
        },
        {
          "title": "gameScale 游戏分成 数据格式",
          "content": "ps：需要转成string\n[\n{\n\"start_profit\": \"0.00\",//毛利润开始值\n\"end_profit\": \"100.00\",//毛利润结束值\n\"scale\": \"30\"//站成比例，单位：%\n}\n]",
          "type": "json"
        },
        {
          "title": "gameCost 游戏费用 数据格式",
          "content": "ps：需要转成string\n{\n\"roundot\": \"30000.00\",//包网费\n\"line_map\": \"30000.00\",//线路图\n\"upkeep\": \"30000.00\",//维护费用\n\"ladle_bottom\": \"30000.00\"//包底\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        \"code\": 0,\n        \"text\": \"保存失败\",\n        \"result\": \"\"\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentController.php",
    "groupTitle": "agent",
    "name": "PostAgentGradeGrade_id"
  },
  {
    "type": "post",
    "url": "/agents/{agent_id}",
    "title": "获取厅主（代理商）详情",
    "description": "<p>获取厅主（代理商）详情</p>",
    "group": "agent",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "grade_id",
            "description": "<p>代理级别，总代则为1，2为二级代理</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n            \"code\": 0,\n            \"text\": \"ok\",\n            \"result\": {\n                \"agent\": {\n                    \"id\": 9,//厅主、代理id\n                    \"user_name\": \"anchen2\",//登录名\n                    \"real_name\": null,//昵称\n                    \"desc\": null,//描述\n                    \"grade_id\": 2,//代理类型\n                    \"tel\": null,//手机\n                    \"account_state\": 1,//账户状态\n                    \"add_time\": \"2017-02-04 09:23:54\",//添加时间\n                    \"update_time\": \"2017-02-05 02:13:12\",//更新时间\n                    \"ip_info\": \"127.0.0.1\",//ip\n                    \"parent_id\": 0,//上级代理id\n                    \"mapping\": null,\n                    \"sub_count\": 0,//代理数\n                    \"area\": \"中国深圳\",//运营地区\n                    \"tel_pre\": \"87\",//手机国家代码\n                    \"email\": \"2222@qq.com\",//邮箱\n                    \"account_lock\": 0,//是否锁定,1为永久锁定,0为未锁定,7为锁定7天,30为锁定30天\n                    \"lock_rank\": null,//1为锁定其下级代理商，2:为锁定其下子账户,3为锁定其下级玩家\n                    \"charge_mode\": null,\n                    \"charge_fixed\": null,\n                    \"charge_percentage\": null,\n                    \"time_zone\": \"(GMT 08:00) Asia / Beijing\",//时区\n                    \"lang_code\": \"zh_cn1\",//语言代码,如简体中文为zh-cn\n                    \"sub_user\": 0,//玩家数\n                    \"lock_reason\": \"\",//锁定原因\n                    \"account_type\": 0,//账号种类,1为正常账号,2为测试账号\n                    \"agent_code\": \"\",\n                    \"t_id\": 1,//模板id\n                    \"group_id\": 0//权限分组ID\n                }\n            }\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 400,\n\"text\": \"参数值错误\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentController.php",
    "groupTitle": "agent",
    "name": "PostAgentsAgent_id"
  },
  {
    "type": "post",
    "url": "/agents/{agent_id}/password",
    "title": "厅主（代理商）修改密码",
    "description": "<p>厅主（代理商）修改密码</p>",
    "group": "agent",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "grade_id",
            "description": "<p>代理级别，总代则为1，2为二级代理</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>确认新密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentController.php",
    "groupTitle": "agent",
    "name": "PostAgentsAgent_idPassword"
  },
  {
    "type": "put",
    "url": "/agent_/{agent_id}/grade/{grade_id}",
    "title": "编辑厅主代理(新)",
    "description": "<p>编辑厅主代理 {agent_id}:代理id,{grade_id}:代理级别 ，1：厅主，2：代理</p>",
    "group": "agent",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>运营地区 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time_zone",
            "description": "<p>时区 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "real_name",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "connect_mode",
            "description": "<p>厅主对接方式，0为额度转换，1为共享钱包，默认为0</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "show_delivery",
            "description": "<p>针对厅主，是否显示厅主交收统计  0：不显示，1：显示 ，默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "games",
            "description": "<p>游戏种类 [ &quot;91-0-0&quot;,//格式：'游戏id-厅id-是否显示' &quot;93-0-0&quot;, &quot;94-0-0&quot;, &quot;95-0-0&quot; ]</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "menus",
            "description": "<p>菜单数据格式 [id-parent_id] [ &quot;91-0&quot;, &quot;93-0&quot;, ]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "t_id",
            "description": "<p>风格模板id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameScale",
            "description": "<p>游戏分成 [ { &quot;start_profit&quot;: &quot;0.00&quot;,//毛利润开始值 &quot;end_profit&quot;: &quot;100.00&quot;,//毛利润结束值 &quot;scale&quot;: &quot;30&quot;//站成比例，单位：% } ]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameCost",
            "description": "<p>游戏费用 { &quot;roundot&quot;: &quot;30000.00&quot;,//包网费 &quot;line_map&quot;: &quot;30000.00&quot;,//线路图 &quot;upkeep&quot;: &quot;30000.00&quot;,//维护费用 &quot;ladle_bottom&quot;: &quot;30000.00&quot;//包底 }</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n    \"code\": 0,\n    \"text\": \"保存成功\",\n    \"result\": \"\"\n    }",
          "type": "json"
        },
        {
          "title": "games 游戏种类 数据格式",
          "content": "[\n\"91-0-0\",\n\"93-0-0\",\n\"94-0-0\",\n\"95-0-0\"\n]",
          "type": "json"
        },
        {
          "title": "menus 菜单权限 数据格式",
          "content": "[\n\"91-0\",//id-parent_id\n\"93-0\"\n]",
          "type": "json"
        },
        {
          "title": "gameScale 游戏分成 数据格式",
          "content": "ps：需要转成string\n[\n{\n\"start_profit\": \"0.00\",//毛利润开始值\n\"end_profit\": \"100.00\",//毛利润结束值\n\"scale\": \"30\"//站成比例，单位：%\n}\n]",
          "type": "json"
        },
        {
          "title": "gameCost 游戏费用 数据格式",
          "content": "ps：需要转成string\n{\n\"roundot\": \"30000.00\",//包网费\n\"line_map\": \"30000.00\",//线路图\n\"upkeep\": \"30000.00\",//维护费用\n\"ladle_bottom\": \"30000.00\"//包底\n}",
          "type": "json"
        },
        {
          "title": "返回4001 扣费模式切换时玩家余额不为零格式",
          "content": "{\n\"code\": 4001,\n\"text\": \"agent.balance_status\",\n\"result\": {\n\"num\": 12007,//玩家数量\n\"filename\": \"excel/n1api005_userInfo.csv\",//文件名\n\"url\": \"http://platform.dev/excel/n1api005_userInfo.csv\"//玩家余额不为零csv下载地址\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 400,\n    \"text\": \"保存失败\",\n    \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentController.php",
    "groupTitle": "agent",
    "name": "PutAgent_Agent_idGradeGrade_id"
  },
  {
    "type": "get",
    "url": "/agentRedPackets",
    "title": "查看厅主单位时间内的红包的领取记录",
    "description": "<p>查看厅主单位时间内的红包的领取记录</p>",
    "group": "agentRedPackets",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hall_name",
            "description": "<p>厅主登录名</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"total\": 3, // 数据总数\n\"per_page\": \"50\", // 每页数量\n\"current_page\": \"1\", //当前页\n\"data\": [\n{\n\"packets_amount\": 1,// 已获取红包金额\n\"get_number\": 1,// 以获取个数\n\"hall_name\": \"hall_name_3\",// 厅主登录名\n\"user_number\": 1// 已经领取会员数\n},\n{\n\"packets_amount\": 1,\n\"get_number\": 1,\n\"hall_name\": \"hall_name_2\",\n\"user_number\": 1\n},\n{\n\"packets_amount\": 11,\n\"get_number\": 3,\n\"hall_name\": \"hall_name\",\n\"user_number\": 2\n}\n],\n\"total_page_score\": { // 总计\n\"get_amount_total\": 13, // 总计已领取金额\n\"get_number_total\": 13, // 总计领取红包个数\n\"get_user_total\": 4 // 总计领取会员数\n},\n\"total_score\": { 小计\n\"get_amount_total\": 13,//小计领取金额\n\"get_number_total\": 13,//小计领取红包个数\n\"get_user_total\": 4// 小计领取会员数\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentRedPacketsController.php",
    "groupTitle": "agentRedPackets",
    "name": "GetAgentredpackets"
  },
  {
    "type": "get",
    "url": "/agentRedPackets/show",
    "title": "查看单个厅主时间段红包详情",
    "description": "<p>查看单个厅主时间段红包详情</p>",
    "group": "agentRedPackets",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hall_name",
            "description": "<p>厅主登录名</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"total\": 1, //总数条数\n\"per_page\": \"50\", //每页数量\n\"current_page\": \"1\", 当前页\n\"data\": [\n{\n\"packets_amount\": 11, // 已领取红包金额\n\"get_number\": 3, //已经领取个数\n\"agent_name\": \"agent_name_1\",// 所属代理\n\"user_name\": \"user_name\" //玩家登陆名\n}\n],\n\"total_page_score\": { //总计\n\"get_amount_total\": 11, //总计领取金额\n\"get_number_total\": 3, //总计数量\n\"get_user_total\": 1 //总计玩家数量\n},\n\"total_score\": {// 小计\n\"get_amount_total\": 11, //小计 红包领取金额\n\"get_number_total\": 3, //小计 红包领取数量\n\"get_user_total\": 1// 小计 领取玩家数量\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentRedPacketsController.php",
    "groupTitle": "agentRedPackets",
    "name": "GetAgentredpacketsShow"
  },
  {
    "type": "get",
    "url": "/cashRecord",
    "title": "查询现金流",
    "description": "<p>现金流列表</p>",
    "group": "cashRecord",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>单号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>玩家id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>玩家登录名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time_type",
            "description": "<p>时间类型 1：传时间段，2：具体时间段</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time_area",
            "description": "<p>当time_type=1时有效, 时间区 1：三天内，2：一周内，3：一个月内</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>当time_type=2时有效, 开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>当time_type=2时有效, 结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>操作类型, 1：api转入，2：api转出 ，3：人工操作（包括扣钱和加钱），4：下注(这个包括下注和派彩的记录）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页 默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示条数 默认 10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_export",
            "description": "<p>是否导出 0不导出，1导出，默认为0不导出</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:现金流列表",
          "content": " HTTP/1.1 200 OK\n{\n\"code\": 0,//状态码，0：成功，非0：错误\n\"text\": \"操作成功\",//文本描述\n\"result\": {//结果对象\n\"total\": 2,//总条数\n\"per_page\": 10,//每页显示条数\n\"current_page\": 1,//当前页\n\"last_page\": 1,//上一页\n\"next_page_url\": null,//下一页url\n\"prev_page_url\": null,//前一页url\n\"data\": [ //数据数组\n{\n\"_id\": '597ad7c8e1382314682fd841',//单号\n\"cash_no\": \"923d3f9f07325ce4\"//局ID（流水号）\n\"user_name\": \"csj_play111\",//玩家名称\n\"type\": 操作类型,1转帐,2打赏,3优惠退水,4线上变更,5公司入款,6优惠冲销,7视讯派彩,8系统取消出款,9系统拒绝出款,10取消派彩变更,21旗舰厅下注，22为至尊厅下注，23为金臂厅下注，24为贵宾厅下注,31视讯取消退回,32旗舰厅取消退回,33金臂厅取消退回,34至尊厅取消退回,35贵宾厅取消退回\n\"amount\": \"-10\",//加减的金额\n\"user_money\": 1980,//用户余额\n\"add_time\": \"2017-03-28 08:00:00\"//添加时间\n\"connect_mode\": 0//扣费模式：0为额度转换，1为共享钱包，默认为0\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "现金流导出成功返回:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"url\": \"http://platform.va/excel/现金流_20170330.xlsx\"//excel下载地址\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/CashRecordController.php",
    "groupTitle": "cashRecord",
    "name": "GetCashrecord"
  },
  {
    "type": "delete",
    "url": "/copywriter/activity/{id}",
    "title": "文案-活动 删除",
    "description": "<p>文案-活动 删除</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformActivityController.php",
    "groupTitle": "copywriter",
    "name": "DeleteCopywriterActivityId"
  },
  {
    "type": "delete",
    "url": "/copywriter/banner/{id}",
    "title": "文案-banner 删除",
    "description": "<p>文案-banner 删除</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformBannerController.php",
    "groupTitle": "copywriter",
    "name": "DeleteCopywriterBannerId"
  },
  {
    "type": "delete",
    "url": "/copywriter/logo/{id}",
    "title": "文案-logo 删除",
    "description": "<p>文案-logo 删除</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformLogoController.php",
    "groupTitle": "copywriter",
    "name": "DeleteCopywriterLogoId"
  },
  {
    "type": "get",
    "url": "/copywriter/activity",
    "title": "文案-活动 列表",
    "description": "<p>文案-活动 列表</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "p_id",
            "description": "<p>主厅id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页 默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"total\": 1,\n    \"per_page\": 10,\n    \"current_page\": 1,\n    \"last_page\": 1,\n    \"next_page_url\": null,\n    \"prev_page_url\": null,\n    \"from\": 1,\n    \"to\": 1,\n    \"data\": [\n    {\n    \"id\": 2,//活动id\n    \"p_id\": 1,//厅主id\n    \"title\": \"test_title\",//活动标题\n    \"play_type\": 0,//展现方式，0为弹框形式，1为其他\n    \"label\": 1,//所属平台,0为PC，1为手机横版，2为手机竖版\n    \"play_place\": 1,//展示位置，0为页面居中方式，1为其他\n    \"start_date\": \"2017-04-13 15:16:18\",//活动开始时间\n    \"end_date\": \"2017-04-13 15:16:19\",//活动结束时间\n    \"img\": \"images/12121.jpg\",//活动图片地址\n    \"status\": 0,//审核状态，0：未审核，1：已审核，2：审核不通过\n    \"add_date\": \"2017-04-17 14:44:39\",//添加时间\n    \"update_date\": \"2017-04-17 14:44:39\",//修改时间\n    \"full_img\": \"http://192.168.31.230:8000/images/12121.jpg\",//全路径活动图片地址\n    \"agent\": {//厅主信息\n    \"user_name\": \"csj\"//厅主名称\n    }\n    }\n    ]\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformActivityController.php",
    "groupTitle": "copywriter",
    "name": "GetCopywriterActivity"
  },
  {
    "type": "get",
    "url": "/copywriter/activity/{id}",
    "title": "文案-活动 详情",
    "description": "<p>文案-活动 详情</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"id\": 2,//活动id\n\"p_id\": 1,//厅主id\n\"title\": \"test_title\",//活动标题\n\"play_type\": 0,//展现方式，0为弹框形式，1为其他\n\"label\": 1,//所属平台,0为PC，1为手机横版，2为手机竖版\n\"play_place\": 1,//展示位置，0为页面居中方式，1为其他\n\"start_date\": \"2017-04-13 15:16:18\",//活动开始时间\n\"end_date\": \"2017-04-13 15:16:19\",//活动结束时间\n\"img\": \"images/12121.jpg\",//活动图片地址\n\"status\": 0,//审核状态，0：未审核，1：已审核，2：审核不通过\n\"add_date\": \"2017-04-17 14:44:39\",//添加时间\n\"update_date\": \"2017-04-17 14:44:39\",//修改时间\n\"full_img\": \"http://192.168.31.230:8000/images/12121.jpg\",//全路径活动图片地址\n\"agent\": {//厅主信息\n\"user_name\": \"csj\"//厅主名称\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformActivityController.php",
    "groupTitle": "copywriter",
    "name": "GetCopywriterActivityId"
  },
  {
    "type": "get",
    "url": "/copywriter/banner",
    "title": "文案-banner列表",
    "description": "<p>文案-banner列表</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "p_id",
            "description": "<p>厅主id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "p_name",
            "description": "<p>厅主登录名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>类型 1：总平台，2厅主</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页 默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"total\": 1,\n    \"per_page\": 10,\n    \"current_page\": 1,\n    \"last_page\": 1,\n    \"next_page_url\": null,\n    \"prev_page_url\": null,\n    \"from\": 1,\n    \"to\": 1,\n    \"data\": [\n    {\n    \"id\": 1,//banner id\n    \"p_id\": 1,//厅主id\n    \"p_name\": '',//厅主名称\n    \"title\": \"test_title\",//标题\n    \"play_type\": 0,//banner的轮播方式，0为从左到右，1为从右到左，默认为0左到右\n    \"label\": 1,//所属平台,0为视讯PC，1为视讯H5，2为视讯APP\n    \"banner\": \"images/12121.jpg\",//banner图片地址\n    \"add_date\": \"2017-04-17 11:13:41\",//添加时间\n    \"update_date\": \"2017-04-17 11:13:41\",//修改时间\n    \"status\": 0,//审核状态，0：未审核，1：已审核，2：审核不通过\n    \"is_use\": 0,//启用状态：0 未使用，1已使用\n    \"sort\": 1,//排序：数字越小越靠前\n    \"full_banner\": \"http://192.168.31.230:8000/images/12121.jpg\",//全路径图片地址\n    \"agent\": {//厅主信息\n    \"user_name\": \"csj\"//厅主名称\n    }\n    }\n    ]\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformBannerController.php",
    "groupTitle": "copywriter",
    "name": "GetCopywriterBanner"
  },
  {
    "type": "get",
    "url": "/copywriter/banner/{id}",
    "title": "文案-banner 详情",
    "description": "<p>文案-banner 详情</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"id\": 1,//banner id\n\"p_id\": 1,//厅主id\n\"p_name\": '',//厅主登录名\n\"title\": \"test_title\",//标题\n\"play_type\": 0,//banner的轮播方式，0为从左到右，1为从右到左，默认为0左到右\n\"label\": 1,//所属平台,0为视讯PC，1为视讯H5，2为视讯APP\n\"banner\": \"images/12121.jpg\",//banner图片地址\n\"add_date\": \"2017-04-17 11:13:41\",//添加时间\n\"update_date\": \"2017-04-17 11:13:41\",//修改时间\n\"status\": 0,//审核状态，0：未审核，1：已审核，2：审核不通过\n\"is_use\": 0,//启用状态：0 未使用，1已使用\n\"sort\": 1,//排序：数字越小越靠前\n\"full_banner\": \"http://192.168.31.230:8000/images/12121.jpg\",//全路径图片地址\n\"agent\": {//厅主信息\n\"user_name\": \"csj\"//厅主名称\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformBannerController.php",
    "groupTitle": "copywriter",
    "name": "GetCopywriterBannerId"
  },
  {
    "type": "get",
    "url": "/copywriter/logo",
    "title": "文案-logo 列表",
    "description": "<p>文案-logo 列表</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "p_id",
            "description": "<p>主厅id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "p_name",
            "description": "<p>主厅登录名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>类型 1：总平台，2厅主</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页 默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": {\n        \"total\": 1,\n        \"per_page\": 10,\n        \"current_page\": 1,\n        \"last_page\": 1,\n        \"next_page_url\": null,\n        \"prev_page_url\": null,\n        \"from\": 1,\n        \"to\": 1,\n        \"data\": [\n        {\n        \"id\": 6,//logo id\n        \"p_id\": 1,//厅主id\n        \"p_name\": '',//厅主名称\n        \"title\": \"test_title\",//LOGO标题\n        \"label\": 1,//所属平台,0为视讯PC，1为视讯H5，2为视讯APP\n        \"logo\": \"images/12121.jpg\",//logo图片地址\n        \"add_date\": \"2017-04-13 15:16:19\",//添加时间\n        \"update_date\": \"2017-04-13 15:16:19\",//修改时间\n        \"status\": 0,//审核状态，0：未审核，1：已审核，2：审核不通过\n        \"is_use\": 0,//启用状态：0 未使用，1已使用\n        \"full_logo\": \"http://192.168.31.230:8000/images/12121.jpg\",//全路径图片地址\n        \"agent\": {//厅主信息\n        \"user_name\": \"csj\"//厅主名称\n        }\n        }\n        ]\n        }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformLogoController.php",
    "groupTitle": "copywriter",
    "name": "GetCopywriterLogo"
  },
  {
    "type": "get",
    "url": "/copywriter/logo/{id}",
    "title": "文案-logo 详情",
    "description": "<p>文案-logo 详情</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n    \"id\": 6,//logo id\n    \"p_id\": 1,//厅主id\n    \"p_name\":''//厅主登录名\n    \"title\": \"test_title\",//LOGO标题\n    \"label\": 1,//所属平台,0为视讯PC，1为视讯H5，2为视讯APP\n    \"logo\": \"images/12121.jpg\",//logo图片地址\n    \"add_date\": \"2017-04-13 15:16:19\",//添加时间\n    \"update_date\": \"2017-04-13 15:16:19\",//修改时间\n    \"status\": 0,//审核状态，0：未审核，1：已审核，2：审核不通过\n    \"is_use\": 0,//启用状态：0 未使用，1已使用\n    \"full_logo\": \"http://192.168.31.230:8000/images/12121.jpg\",//图片全路径\n    \"agent\": {//厅主信息\n    \"user_name\": \"csj\"//厅主名称\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformLogoController.php",
    "groupTitle": "copywriter",
    "name": "GetCopywriterLogoId"
  },
  {
    "type": "patch",
    "url": "/copywriter/activity/{id}",
    "title": "文案-活动 审核",
    "description": "<p>文案-活动 审核</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformActivityController.php",
    "groupTitle": "copywriter",
    "name": "PatchCopywriterActivityId"
  },
  {
    "type": "patch",
    "url": "/copywriter/banner/{id}/isUse",
    "title": "文案-banner 启用&禁用",
    "description": "<p>文案-banner 启用&amp;禁用</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_use",
            "description": "<p>是否启用 1：启用 ，0：禁用</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformBannerController.php",
    "groupTitle": "copywriter",
    "name": "PatchCopywriterBannerIdIsuse"
  },
  {
    "type": "patch",
    "url": "/copywriter/banner/{id}/review",
    "title": "文案-banner 审核",
    "description": "<p>文案-banner 审核</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>审核状态 1：通过，2不通过</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformBannerController.php",
    "groupTitle": "copywriter",
    "name": "PatchCopywriterBannerIdReview"
  },
  {
    "type": "patch",
    "url": "/copywriter/banner/{id}/sort",
    "title": "文案-banner 排序",
    "description": "<p>文案-banner 排序</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>排序 数字越小越靠前</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformBannerController.php",
    "groupTitle": "copywriter",
    "name": "PatchCopywriterBannerIdSort"
  },
  {
    "type": "patch",
    "url": "/copywriter/logo/{id}/isUse",
    "title": "文案-logo 启用&禁用",
    "description": "<p>文案-banner 启用&amp;禁用</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_use",
            "description": "<p>是否启用 1：启用 ，0：禁用</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformLogoController.php",
    "groupTitle": "copywriter",
    "name": "PatchCopywriterLogoIdIsuse"
  },
  {
    "type": "patch",
    "url": "/copywriter/logo/{id}/review",
    "title": "文案-logo 审核",
    "description": "<p>文案-logo 审核</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>审核状态 1：通过，2不通过</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformLogoController.php",
    "groupTitle": "copywriter",
    "name": "PatchCopywriterLogoIdReview"
  },
  {
    "type": "post",
    "url": "/copywriter/activity",
    "title": "文案-活动 添加",
    "description": "<p>文案-活动 添加</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "p_id",
            "description": "<p>厅主ID *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>LOGO描述信息 *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "play_type",
            "description": "<p>轮播方式，0为从左到右，1为从右到左 *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "play_place",
            "description": "<p>展示位置，0为页面居中方式，1为其他 *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "label",
            "description": "<p>所属平台,0为PC，1为手机横版，2为手机竖版 *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "start_date",
            "description": "<p>活动开始时间 2017-04-13 15:16:19*</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "end_date",
            "description": "<p>活动结束时间 2017-04-13 15:16:19*</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图片地址 格式：images/12121.jpg *</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformActivityController.php",
    "groupTitle": "copywriter",
    "name": "PostCopywriterActivity"
  },
  {
    "type": "post",
    "url": "/copywriter/banner",
    "title": "文案-banner 添加",
    "description": "<p>文案-banner 添加</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题 *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "play_type",
            "description": "<p>轮播方式，0为从左到右，1为从右到左，默认为0左到右 *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "label",
            "description": "<p>所属平台,0为视讯PC，1为视讯H5，2为视讯APP*</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>banner图片地址 格式：images/12121.jpg *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>banner跳转地址 格式：http://baidu.com *</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformBannerController.php",
    "groupTitle": "copywriter",
    "name": "PostCopywriterBanner"
  },
  {
    "type": "post",
    "url": "/copywriter/logo",
    "title": "文案-logo 添加",
    "description": "<p>文案-logo 添加</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>LOGO描述信息 *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "label",
            "description": "<p>所属平台,0为视讯PC，1为视讯H5，2为视讯APP *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "logo",
            "description": "<p>logo图片地址 格式：images/12121.jpg *</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformLogoController.php",
    "groupTitle": "copywriter",
    "name": "PostCopywriterLogo"
  },
  {
    "type": "put",
    "url": "/copywriter/activity/{id}",
    "title": "文案-活动 编辑",
    "description": "<p>文案-活动 编辑</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "p_id",
            "description": "<p>厅主ID *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>LOGO描述信息 *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "play_type",
            "description": "<p>轮播方式，0为从左到右，1为从右到左 *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "play_place",
            "description": "<p>展示位置，0为页面居中方式，1为其他 *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "label",
            "description": "<p>所属平台,0为PC，1为手机横版，2为手机竖版 *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "start_date",
            "description": "<p>活动开始时间 2017-04-13 15:16:19*</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "end_date",
            "description": "<p>活动结束时间 2017-04-13 15:16:19*</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图片地址 格式：images/12121.jpg *</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformActivityController.php",
    "groupTitle": "copywriter",
    "name": "PutCopywriterActivityId"
  },
  {
    "type": "put",
    "url": "/copywriter/banner/{id}",
    "title": "文案-banner 编辑",
    "description": "<p>文案-banner 编辑</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题 *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "play_type",
            "description": "<p>banner的轮播方式，0为从左到右，1为从右到左，默认为0左到右 *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "label",
            "description": "<p>所属平台,0为视讯PC，1为视讯H5，2为视讯APP *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>banner图片地址 格式：images/12121.jpg *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>banner跳转地址 格式：http://baidu.com *</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformBannerController.php",
    "groupTitle": "copywriter",
    "name": "PutCopywriterBannerId"
  },
  {
    "type": "put",
    "url": "/copywriter/logo/{id}",
    "title": "文案-logo 编辑",
    "description": "<p>文案-logo 编辑</p>",
    "group": "copywriter",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>LOGO描述信息 *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "label",
            "description": "<p>所属平台,0为视讯PC，1为视讯H5，2为视讯APP *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "logo",
            "description": "<p>logo图片地址 格式：images/12121.jpg *</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GamePlatformLogoController.php",
    "groupTitle": "copywriter",
    "name": "PutCopywriterLogoId"
  },
  {
    "type": "delete",
    "url": "/dealer/{id}",
    "title": "删除荷官",
    "description": "<p>删除荷官</p>",
    "group": "dealer",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/DealerController.php",
    "groupTitle": "dealer",
    "name": "DeleteDealerId"
  },
  {
    "type": "get",
    "url": "/dealer",
    "title": "荷官列表",
    "description": "<p>荷官列表</p>",
    "group": "dealer",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dealer",
            "description": "<p>荷官ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dealer_name",
            "description": "<p>荷官名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>当前第几页 默认1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"total\": 2,\n\"per_page\": \"10\",\n\"current_page\": 1,\n\"last_page\": 1,\n\"next_page_url\": null,\n\"prev_page_url\": null,\n\"from\": 1,\n\"to\": 2,\n\"data\": [\n{\n\"id\": 2,\n\"dealer\": \"333333333\",//荷官ID\n\"dealer_name\": \"w\",//荷官名称\n\"dealer_img\": \"upload/img/dealer/222323233434.jpg\",//荷官图片（相对路径）\n\"last_update\": \"2017-10-17 01:24:52\",//最后更新时间\n\"full_dealer_img\": \"http://images.dev/upload/img/dealer/222323233434.jpg\"//荷官图片（完整路径）\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/DealerController.php",
    "groupTitle": "dealer",
    "name": "GetDealer"
  },
  {
    "type": "get",
    "url": "/dealer/{id}",
    "title": "获取荷官详情",
    "description": "<p>编辑时获取荷官详情</p>",
    "group": "dealer",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"id\": 1,\n\"dealer\": \"222323233434\",//荷官ID\n\"dealer_name\": \"w\",//荷官名称\n\"dealer_img\": \"upload/img/dealer/222323233434.jpg\",//荷官图片（相对路径）\n\"last_update\": \"2017-10-16 23:29:24\",//最后更新时间\n\"full_dealer_img\": \"http://images.dev/upload/img/dealer/222323233434.jpg\"//荷官图片（完整路径）\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/DealerController.php",
    "groupTitle": "dealer",
    "name": "GetDealerId"
  },
  {
    "type": "post",
    "url": "/dealer",
    "title": "添加荷官",
    "description": "<p>添加荷官</p>",
    "group": "dealer",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dealer",
            "description": "<p>荷官ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dealer_name",
            "description": "<p>荷官名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dealer_img",
            "description": "<p>荷官图片</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/DealerController.php",
    "groupTitle": "dealer",
    "name": "PostDealer"
  },
  {
    "type": "put",
    "url": "/dealer/{id}",
    "title": "保存荷官",
    "description": "<p>保存荷官</p>",
    "group": "dealer",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dealer",
            "description": "<p>荷官ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dealer_name",
            "description": "<p>荷官名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dealer_img",
            "description": "<p>荷官图片</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/DealerController.php",
    "groupTitle": "dealer",
    "name": "PutDealerId"
  },
  {
    "type": "delete",
    "url": "/document/{id}",
    "title": "删除文档",
    "description": "<p>删除文档</p>",
    "group": "document",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/DocumentController.php",
    "groupTitle": "document",
    "name": "DeleteDocumentId"
  },
  {
    "type": "get",
    "url": "/document",
    "title": "文档管理列表",
    "description": "<p>文档管理列表</p>",
    "group": "document",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页 默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"total\": 1,\n    \"per_page\": 10,\n    \"current_page\": 1,\n    \"last_page\": 1,\n    \"next_page_url\": null,\n    \"prev_page_url\": null,\n    \"from\": 1,\n    \"to\": 1,\n    \"data\": [\n        {\n            \"id\": 1,//id\n            \"title\": '',//文档名称\n            \"size\": \"\",//文档大小\n            \"path\": \"\",//文档保存相对路径\n            \"desc\": \"\",//文档备注描述\n            \"add_time\": \"2017-04-17 11:13:41\",//添加时间\n            \"full_path\":\"\"//文档全路径\n        }\n    ]\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/DocumentController.php",
    "groupTitle": "document",
    "name": "GetDocument"
  },
  {
    "type": "get",
    "url": "/document/{id}",
    "title": "获取文档详情",
    "description": "<p>获取文档详情</p>",
    "group": "document",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": {\n            \"id\": 1,//id\n            \"title\": '',//文档名称\n            \"size\": \"\",//文档大小\n            \"path\": \"\",//文档保存相对路径\n            \"desc\": \"\",//文档备注描述\n            \"add_time\": \"2017-04-17 11:13:41\",//添加时间\n        }\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/DocumentController.php",
    "groupTitle": "document",
    "name": "GetDocumentId"
  },
  {
    "type": "post",
    "url": "/document",
    "title": "添加文档管理",
    "description": "<p>添加文档管理</p>",
    "group": "document",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文档名称 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>文档大小 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>文档路径 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>文档备注描述</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回：",
          "content": "{\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": \"\"\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/DocumentController.php",
    "groupTitle": "document",
    "name": "PostDocument"
  },
  {
    "type": "put",
    "url": "/document/{id}",
    "title": "编辑文档管理",
    "description": "<p>编辑文档管理</p>",
    "group": "document",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文档名称 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>文档大小 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>文档路径 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>文档备注描述</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回：",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/DocumentController.php",
    "groupTitle": "document",
    "name": "PutDocumentId"
  },
  {
    "type": "post",
    "url": "/getImages.php",
    "title": "获取图片缩略图",
    "description": "<p>获取图片缩略图 使用图片服务器域名： http://images.dev/ 将 “http://platform.dev/api” 替换成 http://images.dev/</p>",
    "group": "files",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>原图片路径</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "size",
            "description": "<p>要生成的图片尺寸 数组 格式['500_200','800_500']</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "成功返回格式:",
          "content": "{\n\"code\": 0,\n\"text\": \"success\",\n\"result\": [\n    {\n        \"500_200\": \"./upload/2017/05/thumb_500_200_2017052505071153.jpg\"\n    },\n    {\n        \"800_500\": \"./upload/2017/05/thumb_800_500_2017052505071153.jpg\"\n    }\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/UploadController.php",
    "groupTitle": "files",
    "name": "PostGetimagesPhp"
  },
  {
    "type": "post",
    "url": "/removeFile.php",
    "title": "删除文件",
    "description": "<p>删除文件 使用文件域名： http://images.dev/ 将 “http://platform.dev/api” 替换成 http://images.dev/</p>",
    "group": "files",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>文件路径（相对路径，数据库保存的路径）</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "成功返回格式:",
          "content": "{\n\"code\": 0,\n\"text\": \"success\",\n\"result\": ''\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/UploadController.php",
    "groupTitle": "files",
    "name": "PostRemovefilePhp"
  },
  {
    "type": "post",
    "url": "/upload.php",
    "title": "文件上传",
    "description": "<p>文件上传 使用文件服务器域名： http://images.dev/ 将 “http://platform.dev/api” 替换成 http://images.dev/</p>",
    "group": "files",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>上传控件名 *</p>"
          },
          {
            "group": "Parameter",
            "type": "Numer",
            "optional": false,
            "field": "type",
            "description": "<p>上传类型 ，非必须，当type=1 ：上传文档 ，type=2：上传荷官图片，默认type为空：默认上传普通图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "dealer_ID",
            "description": "<p>荷官ID（编号） 当type=2时，必须传荷官ID</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "成功返回格式:",
          "content": "{\n\"code\":0,\n\"text\":\"success\",\n\"result\":\n[\n    {\n        \"host\":\"http://images.dev/\",//域名\n        \"save_path\":\"./upload/2017/05/2017052505071153.jpg\",//保存数据库的路径\n        \"size\":'31.14KB'//文件大小\n    }\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/UploadController.php",
    "groupTitle": "files",
    "name": "PostUploadPhp"
  },
  {
    "type": "get",
    "url": "/hall/activeUser",
    "title": "厅主/代理统计，所有厅主/代理旗下的会员数和活跃会员数据统计",
    "description": "<p>厅主/代理统计，所有厅主/代理旗下的会员数和活跃会员数据统计</p>",
    "group": "gain",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "type",
            "description": "<p>数据类型，1为厅主数据，2为代理商数据，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderBy",
            "description": "<p>排序的字段名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>厅主用户名/代理商用户名 （搜索条件）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"code\": 0,\n       \"text\": \"操作成功\",\n       \"result\": {\n       \"data\": [\n           {\n           \"id\": 1, //ID\n           \"user_name\": \"csj\", // 厅主登录\n           \"total_agent_number\": 100,//代理总数\n           \"total_user_number\": ,100 ,//会员总数\n           \"active_user_by_day\": 100,//日活跃会员\n           }\n       ]\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AccountStatisticsController.php",
    "groupTitle": "gain",
    "name": "GetHallActiveuser"
  },
  {
    "type": "get",
    "url": "/hall/agentCount",
    "title": "厅主数据统计，单个厅主旗下代理商总数和新增代理商数量",
    "description": "<p>厅主数据统计，单个厅主旗下代理商总数和新增代理商数量</p>",
    "group": "gain",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>厅主登录名称</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"code\": 0,\n       \"text\": \"操作成功\",\n       \"result\": {\n           \"xAxis\": [1,2,3,4,5,6],\n           \"new\": [51, 84, 84, 6, 84, 96, 52, 1, 49],\n           \"count\": [63, 5, 4, 64, 89, 126, 98, 9, 864],\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AccountStatisticsController.php",
    "groupTitle": "gain",
    "name": "GetHallAgentcount"
  },
  {
    "type": "get",
    "url": "/hall/AgentUser",
    "title": "代理商数据统计，单个代理旗下玩家总数和新增玩家数量",
    "description": "<p>代理商数据统计，单个代理旗下玩家总数和新增玩家数量</p>",
    "group": "gain",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>厅主登录名称</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"code\": 0,\n       \"text\": \"操作成功\",\n       \"result\": {\n           \"xAxis\": [1,2,3,4,5,6],\n           \"users\": [51, 84, 84, 6, 84, 96, 52, 1, 49],\n           \"addUsers\": [63, 5, 4, 64, 89, 126, 98, 9, 864],\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AccountStatisticsController.php",
    "groupTitle": "gain",
    "name": "GetHallAgentuser"
  },
  {
    "type": "get",
    "url": "/hall/charNumber",
    "title": "厅主数据统计，单个厅主天/月注单数量",
    "description": "<p>厅主数据统计，单个厅主天/月注单数量</p>",
    "group": "gain",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>厅主登录名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "type",
            "description": "<p>时间类型，1为月数据，2为天数据，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "hall_type",
            "description": "<p>数据类型，1为厅主数据，2为代理商数据，默认为1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"code\": 0,\n   \"text\": \"操作成功\",\n   \"result\": {\n       \"xAxis\": [1,2,3,4,5,6],\n       \"series\":[\n           {data: [2, 5, 6, 0, 0, 0],\"name\": \"\"注单数},\n       ]\n   }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/ChartStatisticsController.php",
    "groupTitle": "gain",
    "name": "GetHallCharnumber"
  },
  {
    "type": "get",
    "url": "/hall/gain",
    "title": "厅主/代理统计，所有厅主/代理盈利数据数据统计",
    "description": "<p>厅主/代理统计，所有厅主/代理盈利数据数据统计</p>",
    "group": "gain",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "type",
            "description": "<p>数据类型，1为厅主数据，2为代理商数据，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderBy",
            "description": "<p>排序的字段名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>排序的方式（desc 倒叙， asc 正序）</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "field",
            "description": "<p>需要显示的字段数组</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "take",
            "description": "<p>显示的数据条数，默认10条</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>厅主用户名/代理商用户名 （搜索条件）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"code\": 0,\n       \"text\": \"操作成功\",\n       \"result\": {\n       \"data\": [\n       {\n           \"id\": 1, //ID\n           \"user_name\": \"csj\",//厅主名称\n           \"operator_win_score\": \"100.00\",//总派彩\n           \"month_win_score\": \"100.00\",//月派彩\n           \"today_win_score\": \"100.00\",//当天派彩\n           \"total_bet_score\": \"100.00\",//投注总额\n           \"month_bet_score\": \"100.00\",//月投注总额\n           \"day_bet_score\": \"100.00\",//天投注总额\n           \"total_chart_number\": 100,//总注单数\n           \"month_chart_number\": 100,//月总注单数\n           \"day_chart_number\": 100,//天总注单数\n       }\n       ]\n       }\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GainStatisticsController.php",
    "groupTitle": "gain",
    "name": "GetHallGain"
  },
  {
    "type": "get",
    "url": "/hall/singleHallGain",
    "title": "厅主数据统计，单个厅主/代理，每天/月的盈利数据",
    "description": "<p>厅主数据统计，单个厅主/代理，每天/月的盈利数据</p>",
    "group": "gain",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>代理商/厅主登录名</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "type",
            "description": "<p>时间类型，1为月数据，2为天数据，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "hall_type",
            "description": "<p>数据类型，1为厅主数据，2为代理商数据，默认为1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"code\": 0,\n       \"text\": \"操作成功\",\n       \"result\": {\n       \"xAxis\": [1,2,3,4,5,6],\n       \"series\":[\n           {data: [2, 5, 6, 0, 0, 0],\"name\": \"\"派彩总额},\n           {data: [3, 5, 8, 9, 0, 0],\"name\": \"投注总额\"}\n       ]\n       }\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GainStatisticsController.php",
    "groupTitle": "gain",
    "name": "GetHallSinglehallgain"
  },
  {
    "type": "get",
    "url": "/agent/{id}/gameCost",
    "title": "获取厅主游戏费用&包网费用数据",
    "description": "<p>获取厅主游戏费用&amp;包网费用数据,{id}变量为厅主id</p>",
    "group": "gameCost",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"gameScale\": [//游戏分成数组\n{\n\"start_profit\": \"0.00\",//毛利润开始值\n\"end_profit\": \"100.00\",//毛利润结束值\n\"scale\": \"30\"//站成比例，单位：%\n}\n],\n\"gameCost\": {//游戏包网费用对象\n\"roundot\": \"30000.00\",//包网费\n\"line_map\": \"30000.00\",//线路图\n\"upkeep\": \"30000.00\",//维护费用\n\"ladle_bottom\": \"30000.00\"//包底\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/gameCostController.php",
    "groupTitle": "gameCost",
    "name": "GetAgentIdGamecost"
  },
  {
    "type": "post",
    "url": "/agent/{id}/gameCost",
    "title": "添加保存厅主游戏费用数据&包网费用数据",
    "description": "<p>添加保存厅主游戏费用数据&amp;包网费用数据,{id}变量为厅主id</p>",
    "group": "gameCost",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameScale",
            "description": "<p>游戏分成 ，json数组格式：[{&quot;start_profit&quot;: &quot;0.00&quot;,&quot;end_profit&quot;: &quot;100.00&quot;,&quot;scale&quot;: &quot;30&quot;}]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameCost",
            "description": "<p>游戏包网费用，josn对象格式：{&quot;roundot&quot;: &quot;30000.00&quot;,&quot;line_map&quot;: &quot;30000.00&quot;,&quot;upkeep&quot;: &quot;30000.00&quot;,&quot;ladle_bottom&quot;: &quot;30000.00&quot;}</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "gameScale格式参数说明",
          "content": "\"gameScale\": [//游戏分成数组\n{\n\"start_profit\": \"0.00\",//毛利润开始值\n\"end_profit\": \"100.00\",//毛利润结束值\n\"scale\": \"30\"//站成比例，单位：%\n}\n]",
          "type": "json"
        },
        {
          "title": "gameCost格式参数说明",
          "content": "\"gameCost\": {//游戏包网费用对象\n\"roundot\": \"30000.00\",//包网费\n\"line_map\": \"30000.00\",//线路图\n\"upkeep\": \"30000.00\",//维护费用\n\"ladle_bottom\": \"30000.00\"//包底\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/gameCostController.php",
    "groupTitle": "gameCost",
    "name": "PostAgentIdGamecost"
  },
  {
    "type": "delete",
    "url": "/game/{id}",
    "title": "删除游戏",
    "description": "<p>删除游戏</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"保存失败\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameController.php",
    "groupTitle": "game",
    "name": "DeleteGameId"
  },
  {
    "type": "get",
    "url": "/game",
    "title": "游戏管理列表",
    "description": "<p>游戏管理列表</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game_name",
            "description": "<p>游戏名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>游戏id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cat_id",
            "description": "<p>游戏分类</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>游戏是否可用,1为可用,0为不可用</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页 默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n            \"code\": 0,\n            \"text\": \"操作成功\",\n            \"result\": {\n                \"total\": 1,\n                \"per_page\": 10,\n                \"current_page\": 1,\n                \"last_page\": 1,\n                \"next_page_url\": null,\n                \"prev_page_url\": null,\n                \"from\": 1,\n                \"to\": 1,\n                \"data\": [\n                    {\n                        \"id\": 88,\n                        \"cat_id\": 1,\n                        \"game_name\": \"龙虎百家乐\",\n                        \"sort_id\": 1,\n                        \"status\": 1,\n                        \"table_count\": 2,\n                        \"user_count\": 0,\n                        \"process_type\": 109,\n                        \"icon\": \"\",\n                        \"is_recommand\": 0,\n                            \"game_cat\": {\n                            \"id\": 1,\n                            \"cat_name\": \"视频百家乐 \"\n                        }\n                    }\n                ]\n            }\n        }",
          "type": "json"
        },
        {
          "title": "不分页时数据格式",
          "content": "    HTTP/1.1 200 OK\n{\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\":  [\n        {\n        \"id\": 88,\n        \"cat_id\": 1,\n        \"game_name\": \"龙虎百家乐\",\n        \"sort_id\": 1,\n        \"status\": 1,\n        \"table_count\": 2,\n        \"user_count\": 0,\n        \"process_type\": 109,\n        \"icon\": \"\",\n        \"is_recommand\": 0,\n        \"game_cat\": {\n            \"id\": 1,\n            \"cat_name\": \"视频百家乐 \"\n        }\n        }\n        ]\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameController.php",
    "groupTitle": "game",
    "name": "GetGame"
  },
  {
    "type": "get",
    "url": "/game/cat",
    "title": "游戏分类",
    "description": "<p>游戏分类</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": {\n            \"data\": [\n                {\n                    \"id\": 1,\n                    \"parent_id\": 0,\n                    \"cat_name\": \"视频百家乐 \",\n                    \"sort_id\": 1,\n                    \"state\": 1,\n                    \"mapping\": \"\",\n                    \"sub_count\": 0,\n                    \"rank\": 1\n                },\n                {\n                    \"id\": 4,\n                    \"parent_id\": 0,\n                    \"cat_name\": \"视频龙虎 \",\n                    \"sort_id\": 2,\n                    \"state\": 1,\n                    \"mapping\": \"\",\n                    \"sub_count\": 0,\n                    \"rank\": 1\n                },\n                {\n                    \"id\": 3,\n                    \"parent_id\": 0,\n                    \"cat_name\": \"视频骰宝 \",\n                    \"sort_id\": 3,\n                    \"state\": 1,\n                    \"mapping\": \"\",\n                    \"sub_count\": 0,\n                    \"rank\": 1\n                },\n                {\n                    \"id\": 2,\n                    \"parent_id\": 0,\n                    \"cat_name\": \"视频轮盘 \",\n                    \"sort_id\": 4,\n                    \"state\": 1,\n                    \"mapping\": \"\",\n                    \"sub_count\": 0,\n                    \"rank\": 1\n                }\n                ]\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameController.php",
    "groupTitle": "game",
    "name": "GetGameCat"
  },
  {
    "type": "get",
    "url": "/hall/quota",
    "title": "游戏厅限额查询",
    "description": "<p>游戏厅限额查询</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hall_name",
            "description": "<p>厅主名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题（设定限额标题）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hall_type",
            "description": "<p>厅类型，厅id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": {\n            \"id\": 15,\n            \"title\": \"默认限额A\",\n            \"agent_id\": 0,\n            \"status\": 1,\n            \"uptime\": \"2015-05-06 04:06:23\",\n            \"hall_type\": 1,\n            \"item_type\": 2,\n            \"limit_items\": [\n                {\n                    \"game_name\": \"百家乐test \",\n                    \"game_cat_id\": 4,\n                    \"bet_areas\": [\n                        {\n                            \"id\": 433,\n                            \"group_id\": 15,\n                            \"game_cat_id\": 4,\n                            \"max_money\": 4000,\n                            \"min_money\": 4,\n                            \"bet_area\": 4\n                        }\n                    ]\n                }\n            ]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n     {\n        \"code\": 400,\n        \"text\": {\n            \"hall_type\": [\n                \"hall type 不能为空。\"\n            ]\n        },\n        \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/HallQuotaController.php",
    "groupTitle": "game",
    "name": "GetHallQuota"
  },
  {
    "type": "delete",
    "url": "/gamehost/{id}",
    "title": "删除游戏入口域名",
    "description": "<p>删除游戏入口域名</p>",
    "group": "gameHost",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameHostController.php",
    "groupTitle": "gameHost",
    "name": "DeleteGamehostId"
  },
  {
    "type": "get",
    "url": "/gamehost",
    "title": "修改游戏入口域名列表",
    "description": "<p>域名列表</p>",
    "group": "gameHost",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": [\n{\n\"id\": 1,\n\"host_type\": \"1\",\n\"host_url\": \"http://lebogame-pc-22.dev/game.php\",\n\"status\": 1,\n\"add_time\": \"-0001-11-30 00:00:00\",\n\"update_time\": \"-0001-11-30 00:00:00\"\n},\n{\n\"id\": 2,\n\"host_type\": \"2\", // 域名类型 1 pc 2 h5\n\"host_url\": \"http://lebogame-22.dev\",// 域名地址\n\"status\": 1,// 状态 1 启用 0 禁用\n\"add_time\": \"-0001-11-30 00:00:00\", //创建时间\n\"update_time\": \"-0001-11-30 00:00:00\" //开始时间\n},\n{\n\"id\": 3,\n\"host_type\": \"1\",\n\"host_url\": \"http://platform-fore-22.dev/?\",\n\"status\": 1,\n\"add_time\": \"-0001-11-30 00:00:00\",\n\"update_time\": \"2017-11-21 05:05:13\"\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameHostController.php",
    "groupTitle": "gameHost",
    "name": "GetGamehost"
  },
  {
    "type": "get",
    "url": "/gamehost/{id}",
    "title": "查看单个域名信息",
    "description": "<p>查看单个域名信息</p>",
    "group": "gameHost",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": [\n{\n\"id\": 1,\n\"host_type\": \"1\",\n\"host_url\": \"http://lebogame-pc-22.dev/game.php\",\n\"status\": 1,\n\"add_time\": \"-0001-11-30 00:00:00\",\n\"update_time\": \"-0001-11-30 00:00:00\"`\n},\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameHostController.php",
    "groupTitle": "gameHost",
    "name": "GetGamehostId"
  },
  {
    "type": "post",
    "url": "/gamehost",
    "title": "添加游戏入口域名",
    "description": "<p>添加游戏入口域名</p>",
    "group": "gameHost",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "host_url",
            "description": "<p>域名地址</p>"
          },
          {
            "group": "Parameter",
            "type": "numeric",
            "optional": false,
            "field": "host_type",
            "description": "<p>域名类型 1 pc 2 h5</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameHostController.php",
    "groupTitle": "gameHost",
    "name": "PostGamehost"
  },
  {
    "type": "put",
    "url": "/gamehost/{$id}",
    "title": "修改游戏入域名",
    "description": "<p>修改游戏入口域名</p>",
    "group": "gameHost",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "host_url",
            "description": "<p>域名地址</p>"
          },
          {
            "group": "Parameter",
            "type": "numeric",
            "optional": false,
            "field": "host_type",
            "description": "<p>域名类型 1 pc 2 h5</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameHostController.php",
    "groupTitle": "gameHost",
    "name": "PutGamehostId"
  },
  {
    "type": "put",
    "url": "/gamehost/status/{id}",
    "title": "修改游戏入口域名状态",
    "description": "<p>修改游戏入口域名</p>",
    "group": "gameHost",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "numeric",
            "optional": false,
            "field": "status",
            "description": "<p>状态 1 启用 0 禁用</p>"
          },
          {
            "group": "Parameter",
            "type": "numeric",
            "optional": false,
            "field": "host_type",
            "description": "<p>域名类型 1 pc 2 h5</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameHostController.php",
    "groupTitle": "gameHost",
    "name": "PutGamehostStatusId"
  },
  {
    "type": "post",
    "url": "/game",
    "title": "添加游戏",
    "description": "<p>添加游戏</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game_name",
            "description": "<p>游戏名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cat_id",
            "description": "<p>游戏分类</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_recommand",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort_id",
            "description": "<p>排序字段</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>游戏是否可用,1为可用,0为不可用</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>游戏图标</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameHall",
            "description": "<p>游戏厅 数组格式：[0,1,2,3]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameController.php",
    "groupTitle": "game",
    "name": "PostGame"
  },
  {
    "type": "post",
    "url": "/game/{id}",
    "title": "编辑游戏时获取数据",
    "description": "<p>编辑游戏时获取数据</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n        \"data\": {\n            \"id\": 100,\n            \"cat_id\": 2,\n            \"game_name\": \"龙虎百家乐\",\n            \"sort_id\": 1,\n            \"status\": 1,\n            \"table_count\": 0,\n            \"user_count\": 0,\n            \"process_type\": 0,\n            \"icon\": \"http://app-loc.dev/images/2017-02-09-17-30-58-589c36d250140.jpg\",\n            \"is_recommand\": 1,\n            \"game_cat\": {\n                \"id\": 2,\n                \"cat_name\": \"视频轮盘 \"\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"游戏不存在\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameController.php",
    "groupTitle": "game",
    "name": "PostGameId"
  },
  {
    "type": "post",
    "url": "/hall/quota",
    "title": "游戏厅限额添加",
    "description": "<p>游戏厅限额添加</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题（设定限额标题 defaultA defaultB defaultC）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hall_name",
            "description": "<p>厅主名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hall_type",
            "description": "<p>厅类型，厅id</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "items",
            "description": "<p>下注区域值</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"code\": 0,\n        \"text\": \"保存成功\",\n        \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 400,\n            \"text\": \"限额分组已存在\",\n            \"result\": \"\"\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/HallQuotaController.php",
    "groupTitle": "game",
    "name": "PostHallQuota"
  },
  {
    "type": "post",
    "url": "/hall/quota/shortcut",
    "title": "快捷设定限额（添加）",
    "description": "<p>快捷设定限额（添加）</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题（设定限额标题 默认限额A，默认限额B,默认限额C）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hall_type",
            "description": "<p>厅类型，厅id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hall_name",
            "description": "<p>厅主名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game_cat_id",
            "description": "<p>游戏分类的id（百家乐，轮盘，骰宝，龙虎）例如（[1,2,3,4] ）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "max_money",
            "description": "<p>最大值</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "min_money",
            "description": "<p>最小值</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 400,\n\"text\": \"限额分组已存在\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/HallQuotaController.php",
    "groupTitle": "game",
    "name": "PostHallQuotaShortcut"
  },
  {
    "type": "post",
    "url": "/hall/quota/shortcut/{id}",
    "title": "快捷设定限额（保存）",
    "description": "<p>快捷设定限额（保存）</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game_cat_id",
            "description": "<p>游戏分类的id（百家乐，轮盘，骰宝，龙虎）例如（[1,2,3,4]）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "max_money",
            "description": "<p>最大值</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "min_money",
            "description": "<p>最小值</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 400,\n\"text\": \"限额分组不存在\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/HallQuotaController.php",
    "groupTitle": "game",
    "name": "PostHallQuotaShortcutId"
  },
  {
    "type": "put",
    "url": "/game/{id}",
    "title": "编辑游戏",
    "description": "<p>编辑游戏</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game_name",
            "description": "<p>游戏名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cat_id",
            "description": "<p>游戏分类</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_recommand",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort_id",
            "description": "<p>排序字段</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>游戏是否可用,1为可用,0为不可用</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>游戏图标</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameHall[]",
            "description": "<p>游戏厅 数组格式：[0,1,2,3]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 0,\n    \"text\": \"保存成功\",\n    \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 400,\n    \"text\": \"保存失败\",\n    \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameController.php",
    "groupTitle": "game",
    "name": "PutGameId"
  },
  {
    "type": "put",
    "url": "/hall/quota/{id}",
    "title": "保存游戏厅限额",
    "description": "<p>保存游戏厅限额</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "items",
            "description": "<p>下注区域值</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 400,\n\"text\": \"限额分组不存在\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/HallQuotaController.php",
    "groupTitle": "game",
    "name": "PutHallQuotaId"
  },
  {
    "type": "delete",
    "url": "/gameVersion/{id}",
    "title": "删除版本更新",
    "description": "<p>删除版本更新</p>",
    "group": "gameVersion",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameVersionController.php",
    "groupTitle": "gameVersion",
    "name": "DeleteGameversionId"
  },
  {
    "type": "get",
    "url": "/gameVersion",
    "title": "在线更新",
    "description": "<p>版本更新列表</p>",
    "group": "gameVersion",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "label",
            "description": "<p>游戏平台,0为视讯PC，1为视讯H5，2为视讯APP，默认0</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version_n",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "forced_up",
            "description": "<p>是否强制更新，0否，1是，默认0</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页 默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": {\n        \"total\": 1,\n        \"per_page\": 10,\n        \"current_page\": 1,\n        \"last_page\": 1,\n        \"next_page_url\": null,\n        \"prev_page_url\": null,\n        \"from\": 1,\n        \"to\": 1,\n        \"data\": [\n        {\n        \"id\": 1,//id\n        \"label\": 0,//游戏平台,0为视讯PC，1为视讯H5，2为视讯APP\n        \"version_n\": \"\",//版本号\n        \"url\": \"\",//url地址\n        \"forced_up\": 0,//是否强制更新，0否，1是，默认0\n        \"content\": \"\",//更新说明\n        \"add_time\": \"2017-04-17 11:13:41\",//添加时间\n        \"update_time\": \"2017-04-17 11:13:41\",//更新时间\n        \"user_update_time\": \"2017-04-17 11:13:41\",//用户本地更新时间\n        }\n        ]\n        }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameVersionController.php",
    "groupTitle": "gameVersion",
    "name": "GetGameversion"
  },
  {
    "type": "get",
    "url": "/gameVersion/{id}",
    "title": "版本更新详情",
    "description": "<p>版本更新详情</p>",
    "group": "gameVersion",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n    \"id\": 1,//id\n    \"label\": 0,//游戏平台,0为视讯PC，1为视讯H5，2为视讯APP\n    \"version_n\": \"\",//版本号\n    \"url\": \"\",//url地址\n    \"forced_up\": 0,//是否强制更新，0否，1是，默认0\n    \"content\": \"\",//更新说明\n    \"add_time\": \"2017-04-17 11:13:41\",//添加时间\n    \"update_time\": \"2017-04-17 11:13:41\",//更新时间\n    \"user_update_time\": \"2017-04-17 11:13:41\",//用户本地更新时间\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameVersionController.php",
    "groupTitle": "gameVersion",
    "name": "GetGameversionId"
  },
  {
    "type": "post",
    "url": "/gameVersion",
    "title": "添加版本更新",
    "description": "<p>添加版本更新</p>",
    "group": "gameVersion",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "label",
            "description": "<p>游戏平台,0为视讯PC，1为视讯H5，2为视讯APP ，默认0</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "update_time",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_update_time",
            "description": "<p>用户本地更新时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>更新内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version_n",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>url地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "forced_up",
            "description": "<p>是否强制更新，0否，1是，默认0</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": \"\"\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameVersionController.php",
    "groupTitle": "gameVersion",
    "name": "PostGameversion"
  },
  {
    "type": "put",
    "url": "/gameVersion/{id}",
    "title": "编辑版本更新",
    "description": "<p>编辑版本更新</p>",
    "group": "gameVersion",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "label",
            "description": "<p>游戏平台,0为视讯PC，1为视讯H5，2为视讯APP ，默认0</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "update_time",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_update_time",
            "description": "<p>用户本地更新时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>更新内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version_n",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>url地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "forced_up",
            "description": "<p>是否强制更新，0否，1是，默认0</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameVersionController.php",
    "groupTitle": "gameVersion",
    "name": "PutGameversionId"
  },
  {
    "type": "get",
    "url": "/statistics/score",
    "title": "统计-周（月）统计（金额）",
    "description": "<p>统计-周（月）统计（金额）</p>",
    "group": "home",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>类型：1按周，2：按月</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": [\n    {\n    \"name\": \"last_week/last_month\",\n    \"type\": \"bar\",\n    \"data\": [\n    23,//总投注额\n    21//总派彩\n    ]\n    },\n    {\n    \"name\": \"this_week/this_month\",\n    \"type\": \"bar\",\n    \"data\": [\n    3,//总投注额\n    6//总派彩\n    ]\n    }\n    ]\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/HomeController.php",
    "groupTitle": "home",
    "name": "GetStatisticsScore"
  },
  {
    "type": "get",
    "url": "/statistics/semi-annual",
    "title": "统计-近半年的总投注额、总派彩额",
    "description": "<p>统计-近半年的总投注额、总派彩额</p>",
    "group": "home",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": {\n        \"data\": [\n        \"12月\",\n        \"1月\",\n        \"2月\"\n        ],\n        \"series\": [\n        {\n        \"name\": \"T1002\",\n        \"type\": \"line\",\n        \"data\": [\n        \"23.0000\",\n        \"20.0000\",\n        \"20.0000\"\n        ]\n        },\n        {\n        \"name\": \"T1001\",\n        \"type\": \"line\",\n        \"data\": [\n        \"232.0000\",\n        \"352.0000\",\n        \"110.0000\"\n        ]\n        }\n        ]\n        }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/HomeController.php",
    "groupTitle": "home",
    "name": "GetStatisticsSemiAnnual"
  },
  {
    "type": "get",
    "url": "/statistics/today/money",
    "title": "统计-今日派彩、总投注、赢钱最多的代理，输钱最多的代理",
    "description": "<p>统计-今日派彩、总投注、赢钱最多的代理，输钱最多的代理</p>",
    "group": "home",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": {\n        \"total_bet_score\": 500,\n        \"total_win_score\": -500,\n        \"total_win_agent\": {\n        \"agent_name\": \"\",\n        \"money\": 0\n        },\n        \"total_lose_agent\": {\n        \"agent_name\": \"\",\n        \"money\": 0\n        }\n        }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/HomeController.php",
    "groupTitle": "home",
    "name": "GetStatisticsTodayMoney"
  },
  {
    "type": "get",
    "url": "/statistics/today/user",
    "title": "统计-当前在线玩家、今日用户渠道",
    "description": "<p>统计-当前在线玩家、今日用户渠道</p>",
    "group": "home",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"online_user\": 3,\n    \"user_channel\": [\n    {\n    \"name\": \"h5\",\n    \"value\": 0\n    },\n    {\n    \"name\": \"app\",\n    \"value\": 0\n    },\n    {\n    \"name\": \"pc\",\n    \"value\": 0\n    }\n    ]\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/HomeController.php",
    "groupTitle": "home",
    "name": "GetStatisticsTodayUser"
  },
  {
    "type": "get",
    "url": "/statistics/user",
    "title": "统计-周（月）统计（用户）",
    "description": "<p>统计-周（月）统计（用户）</p>",
    "group": "home",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>类型：1按周，2：按月</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": [\n        {\n        \"name\": \"last_week/last_month\",\n        \"type\": \"bar\",\n        \"data\": [\n        23,//新增厅主\n        21//新增代理\n        ]\n        },\n        {\n        \"name\": \"this_week/this_month\",\n        \"type\": \"bar\",\n        \"data\": [\n        3,//新增厅主\n        6//新增代理\n        ]\n        }\n        ]\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/HomeController.php",
    "groupTitle": "home",
    "name": "GetStatisticsUser"
  },
  {
    "type": "get",
    "url": "/index/chartNumber",
    "title": "首页统计今日总的注单数量",
    "description": "<p>首页统计今日总的注单数量</p>",
    "group": "index",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"code\": 0,\n       \"text\": \"操作成功\",\n       \"result\": {\n       \"total_chart_number\": 200, //总的注单数量\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/ChartStatisticsController.php",
    "groupTitle": "index",
    "name": "GetIndexChartnumber"
  },
  {
    "type": "get",
    "url": "/index/hallActiveUser",
    "title": "首页厅主活跃会员排名数据统计",
    "description": "<p>首页厅主活跃会员排名数据统计</p>",
    "group": "index",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"code\": 0,\n       \"text\": \"操作成功\",\n       \"result\": {\n           \"data\": [\n           {\n           \"id\": 1,  //id\n           \"user_name\": \"csj\", //厅主登录名称\n           \"active_user_number\": 100, //活跃会员数量\n\n           }\n           ]\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AccountStatisticsController.php",
    "groupTitle": "index",
    "name": "GetIndexHallactiveuser"
  },
  {
    "type": "get",
    "url": "/index/hallNumber",
    "title": "首页厅主总数",
    "description": "<p>首页厅主总数</p>",
    "group": "index",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"code\": 0,\n   \"text\": \"操作成功\",\n   \"result\": {\n   \"total_hall_number\": 200,\n   }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AccountStatisticsController.php",
    "groupTitle": "index",
    "name": "GetIndexHallnumber"
  },
  {
    "type": "get",
    "url": "/index/hallRanking",
    "title": "首页统计厅主排名",
    "description": "<p>首页统计厅主排名</p>",
    "group": "index",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"code\": 0,\n       \"text\": \"操作成功\",\n       \"result\": {\n           \"data\": [\n           {\n               \"id\": 1,  //id\n               \"user_name\": \"csj\", //厅主登录名称\n               \"operator_win_score\": \"100.00\", //赢钱金额\n           }\n           ]\n       }\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GainStatisticsController.php",
    "groupTitle": "index",
    "name": "GetIndexHallranking"
  },
  {
    "type": "get",
    "url": "/delivery",
    "title": "查看交收数据列表",
    "description": "<p>查看交收数据列表</p>",
    "group": "issue",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issue",
            "description": "<p>期数（不能为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "hall_id",
            "description": "<p>厅主ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "is_filter",
            "description": "<p>是否执行过滤，0为不执行，1为执行，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>厅主登录名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "real_name",
            "description": "<p>厅主用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"total\": 10,\n\"per_page\": 10,\n\"current_page\": 1,\n\"next_page_url\": null,\n\"prev_page_url\": null,\n\"from\": 1,\n\"to\": 1,\n\"data\": [\n{\n\"id\": 1, //id\n\"issue\": \"201701\", //期数\n\"p_name\": \"agent_test\", //厅主名称\n\"real_name\": \"陈教主\", //厅主用户名\n\"p_id\": 2, //厅主ID\n\"real_income\": \"240000.00\"  //应交收金额\n\"platform_profit\": \"100000.00\", //期数对应厅主毛利润\n\"scale\": \"10.00%\", //平台占成比例\n\"receipt\": \"10000.00\", //游戏平台应收费用\n\"roundot\": \"1000.00\", //包网费用\n\"line_map\": \"2000.00\", //线路图\n\"upkeep\": \"2000.00\", //维护费\n\"ladle_bottom\": \"3000.00\", //包底费用\n\"is_over\": 1 //是否已经交收标记，0为否，1为真\n}\n],\n\"total_receipt\": 18000 //本期应收总额\n\"total_real\": 18000 //本期实收总额\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/DeliveryController.php",
    "groupTitle": "issue",
    "name": "GetDelivery"
  },
  {
    "type": "get",
    "url": "/issue",
    "title": "查看交收期数列表",
    "description": "<p>查看交收期数列表</p>",
    "group": "issue",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "year",
            "description": "<p>年份</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"total\": 10,\n\"per_page\": 10,\n\"current_page\": 1,\n\"next_page_url\": null,\n\"prev_page_url\": null,\n\"from\": 1,\n\"to\": 8,\n\"data\": [\n{\n\"id\": 3,            //ID\n\"issue\": \"201703\",  //期数名称\n\"start_date\": \"2017-04-03 00:00:00\",    //开始时间\n\"end_date\": \"2017-04-04 00:00:00\",      //结束时间\n\"state\": 1,\n\"add_user\": \"\",\n\"add_time\": \"2017-04-05 14:43:51\",  //添加时间\n\"update_time\": \"0000-00-00 00:00:00\" //修改时间\n},\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/DeliveryController.php",
    "groupTitle": "issue",
    "name": "GetIssue"
  },
  {
    "type": "get",
    "url": "/issue/{id}",
    "title": "编辑交收期数时获取数据",
    "description": "<p>编辑交收期数时获取数据</p>",
    "group": "issue",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"id\": 3,\n\"issue\": \"201711\",\n\"start_date\": \"2017-04-08 00:00:00\",\n\"end_date\": \"2017-04-09 00:00:00\",\n\"state\": 1,\n\"add_user\": \"\",\n\"add_time\": \"2017-04-05 15:32:33\",\n\"update_time\": \"2017-04-05 15:32:53\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/DeliveryController.php",
    "groupTitle": "issue",
    "name": "GetIssueId"
  },
  {
    "type": "patch",
    "url": "/delivery/{id}",
    "title": "标记已收操作",
    "description": "<p>标记已收操作</p>",
    "group": "issue",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "state",
            "description": "<p>状态 0为否，1为已收</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/DeliveryController.php",
    "groupTitle": "issue",
    "name": "PatchDeliveryId"
  },
  {
    "type": "patch",
    "url": "/issue/{id}",
    "title": "修改交收期数",
    "description": "<p>修改交收期数数据,{id}变量为期数id</p>",
    "group": "issue",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issue",
            "description": "<p>期数标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/DeliveryController.php",
    "groupTitle": "issue",
    "name": "PatchIssueId"
  },
  {
    "type": "post",
    "url": "/autoIssue",
    "title": "一键生成交收期数",
    "description": "<p>一键生成交收期数数据</p>",
    "group": "issue",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>年份</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/DeliveryController.php",
    "groupTitle": "issue",
    "name": "PostAutoissue"
  },
  {
    "type": "post",
    "url": "/issue",
    "title": "添加交收期数",
    "description": "<p>添加交收期数数据</p>",
    "group": "issue",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>时间年月（例如：2017-01）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/DeliveryController.php",
    "groupTitle": "issue",
    "name": "PostIssue"
  },
  {
    "type": "get",
    "url": "/agentOperationLog",
    "title": "查看厅主操作日志",
    "description": "<p>查看系统日志列表</p>",
    "group": "log",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action_name",
            "description": "<p>操作类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action_passivity",
            "description": "<p>被操作对象</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"total\": 3,\n\"per_page\": 50,\n\"current_page\": 1,\n\"last_page\": 1,\n\"next_page_url\": null,\n\"prev_page_url\": null,\n\"from\": 1,\n\"to\": 3,\n\"data\": [\n{\n\"_id\": {\n\"$oid\": \"595c9ad93c1a2115e400143a\"\n},\n\"action_name\": \"修改子账号状态操作\",\n\"user_id\": 454,\n\"action_user\": \"gcg\",\n\"action_desc\": \"删除账号; 名称gaucnhaoguo ID458\",\n\"action_passivity\": \"代理商账号表\",\n\"action_date\": \"2017-07-05 03:52:57\",\n\"ip_info\": \"127.0.0.1\"\n},\n{\n\"_id\": {\n\"$oid\": \"595c9a7e3c1a2115e4001439\"\n},\n\"action_name\": \"修改子账号密码操作\",\n\"user_id\": 454,\n\"action_user\": \"gcg\",\n\"action_desc\": \"修改子账号密码操作; 名称 ID458\",\n\"action_passivity\": \"代理商账号表\",\n\"action_date\": \"2017-07-05 03:51:26\",\n\"ip_info\": \"127.0.0.1\"\n},\n{\n\"_id\": {\n\"$oid\": \"595c9a4e3c1a2115e4001438\"\n},\n\"action_name\": \" 编辑保持账户权限信息\",\n\"user_id\": 454,\n\"action_user\": \"gcg\",\n\"action_desc\": \" 编辑子账户权限信息; 名称gaucnhaoguo ID458\",\n\"action_passivity\": \"代理商账号表\",\n\"action_date\": \"2017-07-05 03:50:38\",\n\"ip_info\": \"127.0.0.1\"\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/SyslogController.php",
    "groupTitle": "log",
    "name": "GetAgentoperationlog"
  },
  {
    "type": "get",
    "url": "/apilog",
    "title": "查看API调用日志",
    "description": "<p>查看API调用日志</p>",
    "group": "log",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"total\": 15,\n\"per_page\": 1,\n\"current_page\": 1,\n\"last_page\": 15,\n\"next_page_url\": \"http://platform.dev/api/apilog?page=2\",\n\"prev_page_url\": null,\n\"from\": 1,\n\"to\": 1,\n\"data\": [\n{\n\"start_time\": \"2017-04-10 17:40:34\", //开始时间\n\"agent\": \"agent_test\", //代理商\n\"postData\": \"{\\\"s\\\":\\\"\\\\/deposit\\\",\\\"token\\\":\\\"2cc954dacab1d2948d635026cb587b1a669da494\\\",\\\"agent\\\":\\\"agent_test\\\",\\\"amount\\\":\\\"100\\\",\\\"username\\\":\\\"csj_play\\\"}\", //提交参数\n\"apiName\": \"会员充值\", //接口业务名称\n\"code\": 0, //请求返回状态码\n\"text\": \"Success\", // 请求返回说明\n\"result\": \"{\\\"order_sn\\\":\\\"LA410172344335845\\\",\\\"amount\\\":\\\"100.00\\\"}\" ,// 请求返回数据\n\"end_time\": \"2017-04-10 17:40:34\" //接口结束时间\n},\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/SyslogController.php",
    "groupTitle": "log",
    "name": "GetApilog"
  },
  {
    "type": "get",
    "url": "/debugAccount",
    "title": "联调账号调用接口统计日志",
    "description": "<p>联调账号调用接口统计列表</p>",
    "group": "log",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent",
            "description": "<p>联调代理</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"data\": [\n{\n\"apiName\": \"获取SecurityKey\",\n\"agent\": \"csjj11\",\n\"status\": \"联调成功(7)\",\n\"succeds\": 7,\n\"sum\": 11\n},\n{\n\"apiName\": \"玩家登录游戏\",\n\"agent\": \"csjj11\",\n\"status\": \"未联调\",\n\"succeds\": 0,\n\"sum\": 0\n},\n{\n\"apiName\": \"获取供应商会员信息\",\n\"agent\": \"csjj11\",\n\"status\": \"未联调\",\n\"succeds\": 0,\n\"sum\": 0\n},\n{\n\"apiName\": \"会员充值\",\n\"agent\": \"csjj11\",\n\"status\": \"未联调\",\n\"succeds\": 0,\n\"sum\": 0\n},\n{\n\"apiName\": \"会员取款\",\n\"agent\": \"csjj11\",\n\"status\": \"未联调\",\n\"succeds\": 0,\n\"sum\": 0\n},\n{\n\"apiName\": \"会员存取款状态查询\",\n\"agent\": \"csjj11\",\n\"status\": \"未联调\",\n\"succeds\": 0,\n\"sum\": 0\n},\n{\n\"apiName\": \"时间段获取注单信息\",\n\"agent\": \"csjj11\",\n\"status\": \"未联调\",\n\"succeds\": 0,\n\"sum\": 0\n},\n{\n\"apiName\": \"获取注单信息\",\n\"agent\": \"csjj11\",\n\"status\": \"未联调\",\n\"succeds\": 0,\n\"sum\": 0\n},\n{\n\"apiName\": \"玩家离线通知\",\n\"agent\": \"csjj11\",\n\"status\": \"未联调\",\n\"succeds\": 0,\n\"sum\": 0\n},\n{\n\"apiName\": \"时间段获取异常注单信息\",\n\"agent\": \"csjj11\",\n\"status\": \"未联调\",\n\"succeds\": 0,\n\"sum\": 0\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/SyslogController.php",
    "groupTitle": "log",
    "name": "GetDebugaccount"
  },
  {
    "type": "get",
    "url": "/exception/cash/log",
    "title": "查看异常注单日志",
    "description": "<p>查看异常注单日志</p>",
    "group": "log",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cash_record_id",
            "description": "<p>单号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "uid",
            "description": "<p>用户名id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "round_no",
            "description": "<p>局id</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n    \"total\": 3,\n    \"per_page\": 10,\n    \"current_page\": 1,\n    \"last_page\": 1,\n    \"next_page_url\": null,\n    \"prev_page_url\": null,\n    \"from\": 1,\n    \"to\": 3,\n    \"data\": [\n        {\n            \"_id\": \"596ec2ed7a545126798e784e\",\n            \"user_order_id\": \"59479f5ee138237b244ec4ae\",//注单id\n            \"uid\": 375179,//用户id\n            \"user_name\": \"a9TEST717929\",//用户登录名\n            \"agent_id\": 2,//代理商登id\n            \"agent_name\": \"agnet_test\",//代理商登录名\n            \"hall_id\": 1,//厅主id\n            \"hall_name\": \"csj\",//厅主登录名\n            \"round_no\": \"71a45f7196da5d8e\",//局id\n            \"payout_win\": 500,//派彩金额\n            \"user_money\": 500,//用户余额\n            \"bet_time\": \"2017-06-19 05:54:51\",//下注时间\n            \"desc\": \"取消异常派彩\",//备注\n            \"action_user\": \"a9TEST717929\",//操作人\n            \"action_user_id\": 375179,//操作人id\n            \"action_passivity\": \"下注明细\",//操作对象\n            \"add_time\": \"2017-06-19 06:29:57\"//添加时间（操作时间）\n        }\n    ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/SyslogController.php",
    "groupTitle": "log",
    "name": "GetExceptionCashLog"
  },
  {
    "type": "get",
    "url": "/playerLoginLog",
    "title": "查看玩家登录日志",
    "description": "<p>查看玩家登录日志</p>",
    "group": "log",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"total\": 15,\n\"per_page\": 1,\n\"current_page\": 1,\n\"last_page\": 15,\n\"next_page_url\": \"http://platform.dev/api/playerLoginLog?page=2\",\n\"prev_page_url\": null,\n\"from\": 1,\n\"to\": 1,\n\"data\": [\n{\n\"agent\": \"h88888\",\n\"desc\": \"登入成功\",\n\"ip_info\": \"192.168.29.83\",\n\"device_type\": \"手机端\",\n\"user_name\": \"1111\",\n\"add_time\": \"2017-06-29 03:37:57\",\n},\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/SyslogController.php",
    "groupTitle": "log",
    "name": "GetPlayerloginlog"
  },
  {
    "type": "get",
    "url": "/sys/chatInfoCount",
    "title": "联调账号注单数统计",
    "description": "<p>联调账号调用接口统计列表</p>",
    "group": "log",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent",
            "description": "<p>联调代理</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"total\": 1,//总页数\n\"per_page\": 10,//每页数\n\"current_page\": 1,//当前页\n\"data\": [\n{\n\"count_num\": 33,//注单数\n\"agent_name\": \"p6api312\"//联调代理登录名\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/SyslogController.php",
    "groupTitle": "log",
    "name": "GetSysChatinfocount"
  },
  {
    "type": "get",
    "url": "/syslog",
    "title": "查看系统日志列表",
    "description": "<p>查看系统日志列表</p>",
    "group": "log",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action_name",
            "description": "<p>操作类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action_passivity",
            "description": "<p>被操作对象</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"total\": 5,\n\"per_page\": 10,\n\"current_page\": 1,\n\"last_page\": 1,\n\"next_page_url\": null,\n\"prev_page_url\": null,\n\"from\": 1,\n\"to\": 5,\n\"data\": [\n{\n\"id\": 1,\n\"action_name\": \"获取验证码\", //执行的动作\n\"user_id\": 2, //操作账号ID\n\"action_user\": \"agent\", //操作账号\n\"action_date\": \"2017-04-10 14:02:10\", //操作时间\n\"ip_info\": \"192.168.28.223\" //操作IP\n},\n\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/SyslogController.php",
    "groupTitle": "log",
    "name": "GetSyslog"
  },
  {
    "type": "get",
    "url": "/userLoginLog",
    "title": "查看API登录日志",
    "description": "<p>查看API登录日志</p>",
    "group": "log",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"total\": 15,\n\"per_page\": 1,\n\"current_page\": 1,\n\"last_page\": 15,\n\"next_page_url\": \"http://platform.dev/api/userLoginLog?page=2\",\n\"prev_page_url\": null,\n\"from\": 1,\n\"to\": 1,\n\"data\": [\n{\n\"agent\": \"h88888\",\n\"postData\": \"{\\\"agent\\\":\\\"h88888\\\",\\\"token\\\":\\\"54c06a5c36d265938cbd8e00a805269dd53b3816\\\",\\\"username\\\":\\\"8Z998wAFdX\\\",\\\"login_type\\\":\\\"1\\\"}\",\n\"apiName\": \"玩家登录游戏\",\n\"ip_info\": \"192.168.29.83\",\n\"log_type\": \"login\",\n\"code\": 0,\n\"text\": \"Success\",\n\"result\": \"{\\\"url\\\":\\\"http:\\\\/\\\\/lebogame-pc-22.dev\\\\/game.php?uid=6b4e392cda61e701112bb\\\"}\",\n\"start_time\": \"2017-06-29 03:37:57\",\n\"end_time\": \"2017-06-29 03:37:57\"\n},\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/SyslogController.php",
    "groupTitle": "log",
    "name": "GetUserloginlog"
  },
  {
    "type": "get",
    "url": "/getmaintain",
    "title": "获取系统维护信息",
    "description": "<p>获取系统维护信息</p>",
    "group": "maintain",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "sys_type",
            "description": "<p>类型：0为平台维护，1为厅维护，默认为平台</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"id\": 0,\n\"sys_type\": \"0\",    //0为平台维护，1为厅维护，默认为平台\n\"state\": 0,         //系统是否开启维护，0为未开启，1为开启，默认为0\n\"hall_id\": \"\",      //\n\"start_date\": \"\",   //系统维护开始时间\n\"end_date\": \"\",     //系统维护结束时间\n\"comtent\": \"\",      //系统维护的公告内容\n\"add_user\": \"\",     //开启系统维护的操作角色账号\n\"add_date\": \"\"      //添加时间\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MaintainController.php",
    "groupTitle": "maintain",
    "name": "GetGetmaintain"
  },
  {
    "type": "post",
    "url": "/hallmaintain",
    "title": "提交游戏厅维护",
    "description": "<p>提交游戏厅维护</p>",
    "group": "maintain",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "state",
            "description": "<p>状态 系统是否开启维护，0为未开启，1为开启，默认为0</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comtent",
            "description": "<p>系统维护内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "games",
            "description": "<p>维护的游戏数组,格式为：厅ID-游戏ID,例如：[0-91,0-92]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MaintainController.php",
    "groupTitle": "maintain",
    "name": "PostHallmaintain"
  },
  {
    "type": "post",
    "url": "/outAllUser",
    "title": "一键登出所有玩家",
    "description": "<p>一键登出所有玩家</p>",
    "group": "maintain",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MaintainController.php",
    "groupTitle": "maintain",
    "name": "PostOutalluser"
  },
  {
    "type": "post",
    "url": "/sysmaintain",
    "title": "提交平台维护",
    "description": "<p>提交平台维护</p>",
    "group": "maintain",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "state",
            "description": "<p>状态 系统是否开启维护，0为未开启，1为开启，默认为0</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comtent",
            "description": "<p>系统维护内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MaintainController.php",
    "groupTitle": "maintain",
    "name": "PostSysmaintain"
  },
  {
    "type": "get",
    "url": "/message",
    "title": "系统公告列表",
    "description": "<p>系统公告列表</p>",
    "group": "message",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "type",
            "description": "<p>公告发布的平台，0为所有平台，1为视讯PC，2为视讯H5，3为视讯APP</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>使用状态 1：启用，0禁用</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页 默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"per_page\": 10,\n\"current_page\": 1,\n\"next_page_url\": null,\n\"prev_page_url\": null,\n\"from\": 1,\n\"to\": 1,\n\"data\": [\n{\n\"id\": 1,\n\"coment_cn\": \"中文标题1\",\n\"coment_en\": \"英文标题2\",\n\"start_date\": \"2017-02-03 00:00:00\",//开始时间\n\"end_date\": \"2017-03-05 00:00:00\",//结束时间\n\"user_start_date\": \"2017-03-05 00:00:00\",//用户本地开始时间\n\"user_end_date\": \"2017-03-05 00:00:00\",//用户本地结束时间\n\"state\": 0, //0为未启用，1为启用，2为删除（该字段没有用到）\n\"type\": 1, //公告发布的平台，0为所有平台，1为视讯PC，2为视讯H5，3为视讯APP。默认为0\n\"add_date\": \"2017-04-06 17:02:31\",\n\"update_date\": \"2017-04-06 17:02:52\"\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MessageController.php",
    "groupTitle": "message",
    "name": "GetMessage"
  },
  {
    "type": "patch",
    "url": "/message/{id}",
    "title": "编辑系统公告",
    "description": "<p>编辑系统公告</p>",
    "group": "message",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coment_cn",
            "description": "<p>中文公告</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "local_time",
            "description": "<p>本地时间 ['2017-06-19 09:50:00','2017-06-19 20:30:00']</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "type",
            "description": "<p>公告发布的平台，0为所有平台，1为视讯PC，2为视讯H5，3为视讯APP。默认为0</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MessageController.php",
    "groupTitle": "message",
    "name": "PatchMessageId"
  },
  {
    "type": "patch",
    "url": "/message/state/{id}",
    "title": "修改系统公告状态",
    "description": "<p>修改系统公告状态</p>",
    "group": "message",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "state",
            "description": "<p>状态：0为未启用，1为启用，2为删除</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MessageController.php",
    "groupTitle": "message",
    "name": "PatchMessageStateId"
  },
  {
    "type": "post",
    "url": "/message",
    "title": "添加系统公告",
    "description": "<p>添加系统公告</p>",
    "group": "message",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coment_cn",
            "description": "<p>中文公告</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "local_time",
            "description": "<p>本地时间 ['2017-06-19 09:50:00','2017-06-19 20:30:00']</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "type",
            "description": "<p>公告发布的平台，0为所有平台，1为视讯PC，2为视讯H5，3为视讯APP。默认为0</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MessageController.php",
    "groupTitle": "message",
    "name": "PostMessage"
  },
  {
    "type": "post",
    "url": "/message/{id}",
    "title": "修改系统公告时获取数据状态",
    "description": "<p>修改系统公告时获取数据状态</p>",
    "group": "message",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"id\": 1,\n\"title: \"标题\",\n\"coment_cn\": \"内容\",\n\"coment_en\": \"英文内容（暂时不用）\",\n\"start_date\": \"2017-04-06 17:06:15\",\n\"end_date\": \"2017-04-06 17:06:15\",\n\"user_start_date\": \"2017-04-06 17:06:15\",\n\"user_end_date\": \"2017-04-06 17:06:15\",\n\"state\": 1, //状态：0为未启用，1为启用，2为删除\n\"type\": 1, 公告发布的平台，0为所有平台，1为视讯PC，2为视讯H5，3为视讯APP。默认为0\n\"add_date\": \"2017-04-06 17:06:15\",\n\"update_date\": \"2017-04-06 17:06:15\",\n \"local_time\":[\"2017-04-06 17:06:15\",\"2017-04-06 17:06:15\"]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MessageController.php",
    "groupTitle": "message",
    "name": "PostMessageId"
  },
  {
    "type": "delete",
    "url": "/alarm",
    "title": "删除报警账号",
    "description": "<p>删除报警账号</p>",
    "group": "monitor",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言 *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>数据ID *</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回：",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MonitorController.php",
    "groupTitle": "monitor",
    "name": "DeleteAlarm"
  },
  {
    "type": "get",
    "url": "/alarm",
    "title": "修改报警账号时获取信息",
    "description": "<p>修改报警账号时获取信息</p>",
    "group": "monitor",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言 *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>记录ID *</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回：",
          "content": "{\n    {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"data\": {\n    \"id\": 1,\n    \"hall_id\": 0,\n    \"mobile\": \"13525566985\",\n    \"email\": \"3026@qq.com\",\n    \"type\": 0,\n    \"last_date\": \"2017-10-17 02:01:14\"\n    }\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MonitorController.php",
    "groupTitle": "monitor",
    "name": "GetAlarm"
  },
  {
    "type": "get",
    "url": "/alarm/list",
    "title": "报警账号列表",
    "description": "<p>报警账号列表</p>",
    "group": "monitor",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页 默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"total\": 4,\n    \"per_page\": 2,\n    \"current_page\": 1,\n    \"last_page\": 2,\n    \"next_page_url\": \"http://platform.dev/api/alarm/list?page=2\",\n    \"prev_page_url\": null,\n    \"from\": 1,\n    \"to\": 2,\n    \"data\": [\n    {\n    \"id\": 2,\n    \"hall_id\": 0,\n    \"mobile\": \"13525566985\",\n    \"email\": \"3026@qq.com\",\n    \"last_date\": \"2017-10-17 02:15:34\"\n    },\n    {\n    \"id\": 3,\n    \"hall_id\": 0,\n    \"mobile\": \"13525566985\",\n    \"email\": \"30262@qq.com\",\n    \"last_date\": \"2017-10-17 02:16:19\"\n    }\n    ]\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MonitorController.php",
    "groupTitle": "monitor",
    "name": "GetAlarmList"
  },
  {
    "type": "get",
    "url": "/monitor",
    "title": "监控管理列表",
    "description": "<p>监控管理列表</p>",
    "group": "monitor",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"data\": [\n{\n\"id\": 1,\n\"hall_id\": 0,\n\"name\": \"刷水\",\n\"tag\": \"M001\",\n\"paas\": 0,\n\"status\": 1,\n\"rule\": []\n},\n{\n\"id\": 2,\n\"hall_id\": 0,\n\"name\": \"大额投注\",\n\"tag\": \"M002\",\n\"paas\": 0,\n\"status\": 1,\n\"rule\": {\n\"bet\": 20000,\n\"gap\": 5\n}\n},\n{\n\"id\": 3,\n\"hall_id\": 0,\n\"name\": \"高盈利\",\n\"tag\": \"M003\",\n\"paas\": 0,\n\"status\": 1,\n\"rule\": {\n\"profit\": 200,\n\"gap\": 5\n}\n},\n{\n\"id\": 4,\n\"hall_id\": 0,\n\"name\": \"连胜次数\",\n\"tag\": \"M004\",\n\"paas\": 0,\n\"status\": 1,\n\"rule\": {\n\"win_streak\": 10,\n\"gap\": 5\n}\n},\n{\n\"id\": 5,\n\"hall_id\": 0,\n\"name\": \"胜率\",\n\"tag\": \"M005\",\n\"paas\": 0,\n\"status\": 1,\n\"rule\": {\n\"victory_ratio\": 200,\n\"gap\": 5\n}\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MonitorController.php",
    "groupTitle": "monitor",
    "name": "GetMonitor"
  },
  {
    "type": "get",
    "url": "/push/list",
    "title": "查看报警列表",
    "description": "<p>查看报警列表</p>",
    "group": "monitor",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页 默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"total\": 1,\n    \"per_page\": 2,\n    \"current_page\": 1,\n    \"last_page\": 1,\n    \"next_page_url\": null,\n    \"prev_page_url\": null,\n    \"from\": 1,\n    \"to\": 1,\n    \"data\": [\n    {\n    \"_id\": {\n    \"$oid\": \"59e5a2f085eb834c4fc7210c\"\n    },\n    \"rule_tag\": \"M001\",\n    \"pass\": 0,\n    \"user_name\": \"A001\",\n    \"hall_id\": 1,\n    \"hall_name\": \"HALL_001\",\n    \"agent_id\": 2,\n    \"agent_name\": \"agent_009\",\n    \"remark\": \"手动造的数据\",\n    \"create_date\": \"2017-10-15 02:24:49\"\n    }\n    ]\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MonitorController.php",
    "groupTitle": "monitor",
    "name": "GetPushList"
  },
  {
    "type": "get",
    "url": "/trigger",
    "title": "获取监控数据列表",
    "description": "<p>获取监控数据列表(公用接口，所有的监控数据都用该接口，只是具体的tag参数值不同)</p>",
    "group": "monitor",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页 默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>具体的监控项tag</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"total\": 1,\n    \"per_page\": 10,\n    \"current_page\": 1,\n    \"last_page\": 1,\n    \"next_page_url\": null,\n    \"prev_page_url\": null,\n    \"from\": 1,\n    \"to\": 1,\n    \"data\": [\n    {\n    \"_id\": {\n    \"$oid\": \"59e83a8685eb834c4fc7c506\"\n    },\n    \"user_id\": 1,\n    \"user_name\": \"user001\",\n    \"hall_name\": \"csj\",\n    \"hall_id\": 1,\n    \"agent_name\": \"agent001\",\n    \"agent_id\": 2,\n    \"rule_tag\": \"M003\",         //触发的监控规则tag\n    \"user_real_value\": \"10000\",     //用户真实的监控数据值\n    \"rule_value\": \"5000\",       //具体监控项的阀值\n    \"number\": 2,\n    \"last_trigger_date\": \"2017-10-19 02:24:49\",\n    \"remark\": \"人工造的数据，后期可能会调整结构或者字段\",\n    \"create_date\": \"2017-10-19 02:24:49\",\n    \"ip_str\": \"192.168.31.155\",\n    \"is_send_email\": 1,\n    \"pass\": 0,\n    \"begin_balance\": 10000,     //用户初始余额（高盈利监控）\n    \"monitor_balance\": 20000       //监控报警时用户余额（高盈利监控）\n    }\n    ]\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MonitorController.php",
    "groupTitle": "monitor",
    "name": "GetTrigger"
  },
  {
    "type": "post",
    "url": "/alarm",
    "title": "添加报警账号",
    "description": "<p>添加报警账号</p>",
    "group": "monitor",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号码 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱 *</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回：",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MonitorController.php",
    "groupTitle": "monitor",
    "name": "PostAlarm"
  },
  {
    "type": "put",
    "url": "/alarm",
    "title": "修改保存报警账号",
    "description": "<p>修改保存报警账号</p>",
    "group": "monitor",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言 *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>数据ID *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号码 *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱 *</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回：",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MonitorController.php",
    "groupTitle": "monitor",
    "name": "PutAlarm"
  },
  {
    "type": "put",
    "url": "/monitor",
    "title": "设置单个监控项参数",
    "description": "<p>设置单个监控项参数</p>",
    "group": "monitor",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>修改设置的监控项标识符</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tule",
            "description": "<p>监控项的具体规则参数（数组格式,例如：['profit'=&gt;200,'gap'=&gt;5]）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MonitorController.php",
    "groupTitle": "monitor",
    "name": "PutMonitor"
  },
  {
    "type": "put",
    "url": "/monitor/status",
    "title": "设置单个监控项状态",
    "description": "<p>设置单个监控项参数</p>",
    "group": "monitor",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>修改设置的监控项标识符</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>应用状态，0为关闭，1为开启，默认为0</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MonitorController.php",
    "groupTitle": "monitor",
    "name": "PutMonitorStatus"
  },
  {
    "type": "delete",
    "url": "redPackets/{packet_id}",
    "title": "删除红包活动",
    "description": "<p>红包活动 删除</p>",
    "group": "redPackets",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RedPacketsController.php",
    "groupTitle": "redPackets",
    "name": "DeleteRedpacketsPacket_id"
  },
  {
    "type": "get",
    "url": "/redPackets",
    "title": "查看红包活动列表",
    "description": "<p>查看红包活动列表</p>",
    "group": "redPackets",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action_name",
            "description": "<p>操作类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action_passivity",
            "description": "<p>被操作对象</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"total\": 8,\n\"per_page\": 50,\n\"current_page\": 1,\n\"last_page\": 1,\n\"next_page_url\": null,\n\"prev_page_url\": null,\n\"from\": 1,\n\"to\": 8,\n\"data\": [\n{\n\"id\": 1, //活动ID\n\"title\": \"一言不合就发红包\", // 标题\n\"trigger\": 1, // 红包触发类型,0为大厅（红包雨），1为下注时（普通红包）\n\"type\": 1, // 红包类型，0为红包雨，1为普通红包，默认为红包雨\n\"user_max\": 1, // 单个会员最大能在该活动抢到的红包数\n\"total_amount\": 100, // 红包的金额（只能为整数金额）\n\"get_amount\": 99,// 已经领取的金额\n\"total_number\": 100,// 总的红包个数\n\"get_number\": 99,// 已经领取的红包个数\n\"total_user\": 99,// 领取过该红包的会员数\n\"start_date\": \"2017-10-16 10:43:31\",// 红包活动开始时间\n\"end_date\": \"2017-10-17 10:43:36\",// 红包活动结束时间\n\"status\": 1,// 红包状态，0为已结束，1为正常，默认为1\n\"available\": 1// 1 可以修改删除  0 不可以修改删除\n}\n],\n\"total_page_score\": { // 小计\n\"total_amount\": 310,// 领取金额\n\"total_number\": 17,// 领取个数\n\"total_user\": 1 //领取人数\n},\n\"total_score\": {// 总计\n\"total_amount\": \"310.00\",\n\"total_number\": \"17\",\n\"total_user\": \"1\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RedPacketsController.php",
    "groupTitle": "redPackets",
    "name": "GetRedpackets"
  },
  {
    "type": "get",
    "url": "/redPackets/show/{id}",
    "title": "查看编辑的单个红包数据",
    "description": "<p>查看编辑的单个红包数据</p>",
    "group": "redPackets",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"id\": 10,\n\"title\": \"我要发红包\",\n\"trigger\": 1,\n\"type\": 1,\n\"user_max\": 1,\n\"total_amount\": 100,\n\"get_amount\": 0,\n\"total_number\": 100,\n\"get_number\": 100,\n\"total_user\": 0,\n\"start_date\": \"0000-00-00 00:00:00\",\n\"end_date\": \"0000-00-00 00:00:00\",\n\"status\": 1\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RedPacketsController.php",
    "groupTitle": "redPackets",
    "name": "GetRedpacketsShowId"
  },
  {
    "type": "get",
    "url": "redPackets/showDetail/{id}",
    "title": "查看单个红包活动领取详情",
    "description": "<p>查看单个红包活动领取详情</p>",
    "group": "redPackets",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"data\": [\n{\n\"packets_amount\": 1,// 红包金额\n\"get_number\": 1,//红包数量\n\"hall_name\": \"hall_name_3\"//厅主登录名\n},\n{\n\"packets_amount\": 1,\n\"get_number\": 1,\n\"hall_name\": \"hall_name_2\"\n},\n{\n\"packets_amount\": 11,\n\"get_number\": 3,\n\"hall_name\": \"hall_name\"\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RedPacketsController.php",
    "groupTitle": "redPackets",
    "name": "GetRedpacketsShowdetailId"
  },
  {
    "type": "post",
    "url": "/redPackets",
    "title": "添加红包活动",
    "description": "<p>添加红包活动</p>",
    "group": "redPackets",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题 ,</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>红包触发类型,0为大厅（红包雨），1为下注时（普通红包）,</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trigger",
            "description": "<p>红包类型，0为红包雨，1为普通红包，默认为红包雨,</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_max",
            "description": "<p>单个会员最大能在该活动抢到的红包数,</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_amount",
            "description": "<p>红包的金额（只能为整数金额）,</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_number",
            "description": "<p>总的红包个数,</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requirements_type",
            "description": "<p>抢红包的条件 1累计下注总额类型   2 当天下注总额,</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requirements_amount",
            "description": "<p>抢红包条件的额度 单位/元,</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_largest",
            "description": "<p>大额用户的额度 单位/元,</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>红包活动开始时间,</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>红包活动结束时间,</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RedPacketsController.php",
    "groupTitle": "redPackets",
    "name": "PostRedpackets"
  },
  {
    "type": "put",
    "url": "/redPackets/{packet_id}",
    "title": "编辑红包活动",
    "description": "<p>编辑红包活动</p>",
    "group": "redPackets",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题 ,</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>红包触发类型,0为大厅（红包雨），1为下注时（普通红包）,</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trigger",
            "description": "<p>红包类型，0为红包雨，1为普通红包，默认为红包雨,</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_max",
            "description": "<p>单个会员最大能在该活动抢到的红包数,</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_amount",
            "description": "<p>红包的金额（只能为整数金额）,</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_number",
            "description": "<p>总的红包个数,</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requirements_type",
            "description": "<p>抢红包的条件 1累计下注总额类型   2 当天下注总额,</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requirements_amount",
            "description": "<p>抢红包条件的额度 单位/元,</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_largest",
            "description": "<p>大额用户的额度 单位/元,</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>红包活动开始时间,</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>红包活动结束时间,</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RedPacketsController.php",
    "groupTitle": "redPackets",
    "name": "PutRedpacketsPacket_id"
  },
  {
    "type": "get",
    "url": "/game/chart",
    "title": "报表统计-查询游戏 （导出）",
    "description": "<p>报表统计-查询游戏 导出）</p>",
    "group": "report",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "game_hall_id",
            "description": "<p>游戏厅类型,0:旗舰厅，1贵宾厅，2：金臂厅， 3：至尊厅</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "game_id",
            "description": "<p>游戏id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "agent_id",
            "description": "<p>代理id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hall_id",
            "description": "<p>厅主id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "table_no",
            "description": "<p>桌号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间 2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间  2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order_by",
            "description": "<p>排序类型(暂时没用到) start_time、user_id、game_hall_id、game_id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_export",
            "description": "<p>是否导出 1是，0否 默认为0</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>查询类型：1：查询总投注额，2：查询指定厅主，3：查询指定代理，4：查询厅，5：查询游戏，6：查询桌次， 默认为5：查询游戏</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: 报表统计",
          "content": "\n{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": [\n{\n\"game_id\": 94,\n\"game_round_num\": 9,\n\"valid_bet_score_total\": 2950,\n\"total_bet_score\": 2950,\n\"total_win_score\": 15410,\n\"win_rate\": 0.19143413367943\n}\n],\n\"totals\": {\n\"game_round_num\": 78,\n\"valid_bet_score_total\": 213776,\n\"total_bet_score\": 213776,\n\"total_win_score\": 12292,\n\"win_rate\": \"571.58%\"\n}\n}",
          "type": "json"
        },
        {
          "title": "Success-Response: 报表统计-游戏导出",
          "content": "{\n            \"code\": 0,\n            \"text\": \"操作成功\",\n            \"result\": {\n                \"url\": \"http://app-loc.dev/excel/user_chart_info_20170215.xls\"\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameController.php",
    "groupTitle": "report",
    "name": "GetGameChart"
  },
  {
    "type": "get",
    "url": "/totalBet",
    "title": "报表统计-查询总投注额",
    "description": "<p>报表统计-查询总投注额</p>",
    "group": "report",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "game_hall_id",
            "description": "<p>游戏厅类型,0:旗舰厅，1贵宾厅，2：金臂厅， 3：至尊厅</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "login_type",
            "description": "<p>登录类型,0 网页登陆；1 手机字符登录 2 手机手势登录</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间 2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间  2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页,默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示条数，默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_export",
            "description": "<p>是否导出 1是，0否 默认为 0</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "查询总投注额数据格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"total\": 2,//总页数\n\"per_page\": 1,//每页显示条数\n\"current_page\": 1,//当前页\n\"data\": [\n{\n\"hall_id\": 1,//厅主id\n\"hall_name\": \"csj\",//厅主名称\n\"game_hall_id\": 0,//厅id\n\"game_hall_code\": \"GH0001\",//厅标识码\n\"game_round_num\": 23,//总笔数\n\"valid_bet_score_total\": 6450,//总有效投注额\n\"total_bet_score\": 7500,//总投注额\n\"operator_win_score\": 350//商家盈利\n}\n],\n\"total_page_score\": {//当前页的小计\n\"game_round_num\": 23,//总笔数\n\"valid_bet_score_total\": 6450,//总有效投注额\n\"total_bet_score\": 7500,//总投注额\n\"operator_win_score\": 350//商家盈利\n},\n\"total_score\": {//总计\n\"game_round_num\": 24,//总笔数\n\"valid_bet_score_total\": 6750,6450,//总有效投注额\n\"total_bet_score\": 7800,//总投注额\n\"operator_win_score\": 50//商家盈利\n}\n}\n}",
          "type": "json"
        },
        {
          "title": "导出总投注额数据格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"url\": \"http://platform.va/excel/查询总投注额_20170330.xlsx\"//excel地址\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameStatisticsController.php",
    "groupTitle": "report",
    "name": "GetTotalbet"
  },
  {
    "type": "get",
    "url": "/totalBet/agent",
    "title": "报表统计-查询指定代理",
    "description": "<p>报表统计-查询指定代理</p>",
    "group": "report",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "agent_id",
            "description": "<p>代理id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_name",
            "description": "<p>代理名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "game_hall_id",
            "description": "<p>游戏厅类型,0:旗舰厅，1贵宾厅，2：金臂厅， 3：至尊厅</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "game_id",
            "description": "<p>游戏id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间 2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间  2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_export",
            "description": "<p>是否导出 1是，0否 默认为 0</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "列表返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"data\": [\n{\n\"agent_id\": 1,//代理id\n\"agent_name\": \"\",//代理名称\n\"game_hall_id\": 0,//游戏厅类型,0:旗舰厅，1贵宾厅，2：金臂厅， 3：至尊厅\n\"game_hall_code\": \"GH0001\",//游戏厅标识码\n\"game_name\": \"极速百家乐\",//游戏名称\n\"game_round_num\": 8,//局数\n\"valid_bet_score_total\": 3510,//有效投注额\n\"total_bet_score\": 3510,//投注额\n\"operator_win_score\": -16000//盈利\n}\n]\n}\n}",
          "type": "json"
        },
        {
          "title": "导出数据返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"url\": \"http://platform.va/excel/查询指定代理_20170330.xlsx\"//excel地址\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameStatisticsController.php",
    "groupTitle": "report",
    "name": "GetTotalbetAgent"
  },
  {
    "type": "get",
    "url": "/totalBet/game",
    "title": "报表统计-查询游戏",
    "description": "<p>报表统计-查询游戏</p>",
    "group": "report",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "game_id",
            "description": "<p>游戏id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间 2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间  2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页 默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_export",
            "description": "<p>是否导出 1是，0否 默认为 0</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "列表返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"total\": 5,\n\"per_page\": \"1\",\n\"current_page\": \"1\",\n\"data\": [\n{\n\"game_id\": 93,//游戏id\n\"game_name\": \"龙虎 \",//游戏名称\n\"game_round_num\": 5,//局数\n\"valid_bet_score_total\": 2500,//有效投注额\n\"total_bet_score\": 2500,//投注额\n\"operator_win_score\": 100//商家盈利\n}\n],\n\"total_page_score\": {//当前页的小计\n\"game_round_num\": 5,//总笔数\n\"valid_bet_score_total\": 2500,//总有效投注额\n\"total_bet_score\": 2500,//总投注额\n\"operator_win_score\": 100//商家盈利\n},\n\"total_score\": {//总计\n\"game_round_num\": 24,//总笔数\n\"valid_bet_score_total\": 6750,//总有效投注额\n\"total_bet_score\": 7800,//总投注额\n\"operator_win_score\": 50//商家盈利\n}\n}\n}",
          "type": "json"
        },
        {
          "title": "导出数据返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"url\": \"http://platform.va/excel/查询指定代理_20170330.xlsx\"//excel地址\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameStatisticsController.php",
    "groupTitle": "report",
    "name": "GetTotalbetGame"
  },
  {
    "type": "get",
    "url": "/totalBet/hall",
    "title": "报表统计-查询指定厅主",
    "description": "<p>报表统计-查询指定厅主</p>",
    "group": "report",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hall_id",
            "description": "<p>厅主id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hall_name",
            "description": "<p>厅主名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "game_hall_id",
            "description": "<p>游戏厅类型,0:旗舰厅，1贵宾厅，2：金臂厅， 3：至尊厅</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "game_id",
            "description": "<p>游戏id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间 2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间  2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_export",
            "description": "<p>是否导出 1是，0否 默认为 0</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "列表返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"data\": [\n{\n\"hall_id\": 1,//厅主id\n\"hall_name\": \"\",//厅主名称\n\"game_hall_id\": 0,//游戏厅类型,0:旗舰厅，1贵宾厅，2：金臂厅， 3：至尊厅\n\"game_hall_code\": \"GH0001\",//游戏厅标识码\n\"game_name\": \"极速百家乐\",//游戏名称\n\"game_round_num\": 8,//局数\n\"valid_bet_score_total\": 3510,//有效投注额\n\"total_bet_score\": 3510,//投注额\n\"operator_win_score\": -16000//盈利\n}\n]\n}\n}",
          "type": "json"
        },
        {
          "title": "导出数据返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"url\": \"http://platform.va/excel/查询指定厅主_20170330.xlsx\"//excel地址\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameStatisticsController.php",
    "groupTitle": "report",
    "name": "GetTotalbetHall"
  },
  {
    "type": "get",
    "url": "/totalBet/player",
    "title": "报表统计-查询指定玩家",
    "description": "<p>报表统计-查询指定玩家</p>",
    "group": "report",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>玩家id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>玩家账号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "game_hall_id",
            "description": "<p>游戏厅类型,0:旗舰厅，1贵宾厅，2：金臂厅， 3：至尊厅</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "game_id",
            "description": "<p>游戏id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间 2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间  2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_export",
            "description": "<p>是否导出 1是，0否 默认为 0</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "列表返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"data\": [\n{\n\"user_id\": 965,//玩家id\n\"account\": \"a9TEST607821\",//玩家账号（登录名）\n\"game_hall_id\": 0,//游戏厅id\n\"game_hall_code\": \"GH0001\",//游戏厅标识码\n\"game_name\": \"\",//游戏名称\n\"game_round_num\": 1,//总笔数\n\"valid_bet_score_total\": 10,//总有效数投注\n\"total_bet_score\": 10,//总投注\n\"total_win_score\": 10//玩家盈利\n}\n]\n}\n}",
          "type": "json"
        },
        {
          "title": "导出数据返回格式",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"url\": \"http://platform.va/excel/查询指定代理_20170330.xlsx\"//excel地址\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameStatisticsController.php",
    "groupTitle": "report",
    "name": "GetTotalbetPlayer"
  },
  {
    "type": "get",
    "url": "/room",
    "title": "十三水房间管理列表",
    "description": "<p>十三水房间管理列表</p>",
    "group": "room",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type_id",
            "description": "<p>游戏分类</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>房间是否可用,1为可用,0为不可用</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页 默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是 0否，默认为1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"total\": 1,\n    \"per_page\": 10,\n    \"current_page\": 1,\n    \"last_page\": 1,\n    \"next_page_url\": null,\n    \"prev_page_url\": null,\n    \"from\": 1,\n    \"to\": 1,\n    \"data\": [\n    {\n    \"id\": 157,  // 游戏种类\n    \"cat_id\": 4, // 游戏种类\n    \"room_name\": \"十三水--新手场\",// 房间名称\n    \"bottom_score\": 500,//房间底分 最低输掉的金额\n    \"sort_id\": 0,//排序字段\n    \"status\": 1,//房间是否可用,1为可用,0为不可用，2已删除\n    \"is_recommand\": 0,//是否推荐,0为不推荐,1为推荐\n    \"type_id\": 1,// 十三水游戏种类\n    \"thirteen_poker_room\": {\n    \"type_name\": \"基础十三水\"\n    }\n    }\n    ]\n    }\n    }",
          "type": "json"
        },
        {
          "title": "不分页时数据格式",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"data\": [\n    {\n    \"id\": 157, // 游戏种类\n    \"cat_id\": 4,// 游戏种类\n    \"room_name\": \"十三水--新手场\",// 房间名称\n    \"bottom_score\": 500,//房间底分 最低输掉的金额\n    \"sort_id\": 0,//排序字段\n    \"status\": 1,//房间是否可用,1为可用,0为不可用，2已删除\n    \"is_recommand\": 0,//是否推荐,0为不推荐,1为推荐\n    \"type_id\": 1,// 十三水游戏种类\n    \"thirteen_poker_room\": {\n    \"type_name\": \"基础十三水\"\n    }\n    }\n    ]\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoomInfoController.php",
    "groupTitle": "room",
    "name": "GetRoom"
  },
  {
    "type": "get",
    "url": "/room/cat",
    "title": "十三水游戏分类",
    "description": "<p>十三水游戏分类</p>",
    "group": "room",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"data\": [\n    {\n    \"id\": 1, //十三水游戏分类Id\n    \"cat_id\": 4,\n    \"type_name\": \"基础十三水\",//十三水游戏分类名称\n    \"sort_id\": 100//排序字段\n    }\n    ]\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoomInfoController.php",
    "groupTitle": "room",
    "name": "GetRoomCat"
  },
  {
    "type": "get",
    "url": "/room/defalutOdds",
    "title": "十三水游戏默认赔率方案显示",
    "description": "<p>十三水游戏分类</p>",
    "group": "room",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"data\": [\n    {\n    \"card_type\": 1,//牌型分为  普通 1 特殊 2 默认为普通\n    \"play_name_type\": \"1\",//牌型类型 1-13 为特殊 14-22 为普通\n    \"play_rules_odds\": 108,//牌型赔率\n    \"play_odds_name\": \"至尊青龙\"//牌型赔率名称\n    },\n    {\n    \"card_type\": 1,\n    \"play_name_type\": \"2\",\n    \"play_rules_odds\": 36,\n    \"play_odds_name\": \"一条龙\"\n    },\n    {\n    \"card_type\": 1,\n    \"play_name_type\": \"3\",\n    \"play_rules_odds\": 24,\n    \"play_odds_name\": \"十二皇族\"\n    },\n    {\n    \"card_type\": 1,\n    \"play_name_type\": \"4\",\n    \"play_rules_odds\": 20,\n    \"play_odds_name\": \"三同花顺\"\n    },\n    {\n    \"card_type\": 1,\n    \"play_name_type\": \"5\",\n    \"play_rules_odds\": 20,\n    \"play_odds_name\": \"三分天下\"\n    },\n    {\n    \"card_type\": 1,\n    \"play_name_type\": \"6\",\n    \"play_rules_odds\": 10,\n    \"play_odds_name\": \"全大\"\n    },\n    {\n    \"card_type\": 1,\n    \"play_name_type\": \"7\",\n    \"play_rules_odds\": 10,\n    \"play_odds_name\": \"全小\"\n    },\n    {\n    \"card_type\": 1,\n    \"play_name_type\": \"8\",\n    \"play_rules_odds\": 10,\n    \"play_odds_name\": \"凑一色\"\n    },\n    {\n    \"card_type\": 2,\n    \"play_name_type\": \"9\",\n    \"play_rules_odds\": 6,\n    \"play_odds_name\": \"四套三条\"\n    },\n    {\n    \"card_type\": 2,\n    \"play_name_type\": \"10\",\n    \"play_rules_odds\": 5,\n    \"play_odds_name\": \"五对三条\"\n    },\n    {\n    \"card_type\": 2,\n    \"play_name_type\": \"11\",\n    \"play_rules_odds\": 4,\n    \"play_odds_name\": \"六对半\"\n    },\n    {\n    \"card_type\": 2,\n    \"play_name_type\": \"12\",\n    \"play_rules_odds\": 4,\n    \"play_odds_name\": \"三顺子\"\n    },\n    {\n    \"card_type\": 2,\n    \"play_name_type\": \"13\",\n    \"play_rules_odds\": 3,\n    \"play_odds_name\": \"三同花\"\n    },\n    {\n    \"card_type\": 2,\n    \"play_name_type\": \"14\",\n    \"play_rules_odds\": 1,\n    \"play_odds_name\": \"赢一水\"\n    },\n    {\n    \"card_type\": 2,\n    \"play_name_type\": \"15\",\n    \"play_rules_odds\": 3,\n    \"play_odds_name\": \"冲三\"\n    },\n    {\n    \"card_type\": 2,\n    \"play_name_type\": \"16\",\n    \"play_rules_odds\": 9,\n    \"play_odds_name\": \"中墩同花顺\"\n    },\n    {\n    \"card_type\": 2,\n    \"play_name_type\": \"17\",\n    \"play_rules_odds\": 5,\n    \"play_odds_name\": \"尾墩同花顺\"\n    },\n    {\n    \"card_type\": 2,\n    \"play_name_type\": \"18\",\n    \"play_rules_odds\": -1,\n    \"play_odds_name\": \"输一水\"\n    },\n    {\n    \"card_type\": 3,\n    \"play_name_type\": \"19\",\n    \"play_rules_odds\": 7,\n    \"play_odds_name\": \"中墩铁支\"\n    },\n    {\n    \"card_type\": 4,\n    \"play_name_type\": \"20\",\n    \"play_rules_odds\": 4,\n    \"play_odds_name\": \"尾墩铁支\"\n    },\n    {\n    \"card_type\": 5,\n    \"play_name_type\": \"21\",\n    \"play_rules_odds\": 0,\n    \"play_odds_name\": \"和\"\n    },\n    {\n    \"card_type\": 6,\n    \"play_name_type\": \"22\",\n    \"play_rules_odds\": 2,\n    \"play_odds_name\": \"中墩葫芦\"\n    }\n    ]\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoomInfoController.php",
    "groupTitle": "room",
    "name": "GetRoomDefalutodds"
  },
  {
    "type": "get",
    "url": "/room/odds/show/{room_id}",
    "title": "电子游戏十三水房间盈利率显示",
    "description": "<p>电子游戏房间盈利率修改显示</p>",
    "group": "room",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n        \"data\": {\n            \"id\": 1, //房间Id\n            \"min_odds\": 35, //盈利率下限\n            \"max_odds\": 45,//盈利率上限\n            \"room_name\": \"十三水--新手场\"//房间名称\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"房间不存在\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoomInfoController.php",
    "groupTitle": "room",
    "name": "GetRoomOddsShowRoom_id"
  },
  {
    "type": "get",
    "url": "/room/rules/show/{room_id}",
    "title": "十三水电子游戏房间赔率方案显示",
    "description": "<p>十三水电子游戏房间赔率方案显示</p>",
    "group": "room",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"data\": [\n        {\n            \"rule_id\": 1, //赔率Id\n            \"cat_id\": 4,  // 游戏种类\n            \"room_id\": 1, // 房间Id\n            \"room_name\": \"十三水—新手场\", //房间名称\n            \"card_type\": 1, // 赔率是否为特殊 1 特殊 2 普通\n            \"play_name_type\": \"1\", //赔率类型名称\n            \"play_rules_odds\": 68  //赔率\n            },\n            {\n            \"rule_id\": 2,\n            \"cat_id\": 4,\n            \"room_id\": 1,\n            \"room_name\": \"十三水—新手场\",\n            \"card_type\": 1,\n            \"play_name_type\": \"1\",\n            \"play_rules_odds\": 99\n        }\n    ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"房间不存在\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoomInfoController.php",
    "groupTitle": "room",
    "name": "GetRoomRulesShowRoom_id"
  },
  {
    "type": "get",
    "url": "/room/status/show/{room_id}",
    "title": "电子游戏十三水状态显示",
    "description": "<p>电子游戏十三水状态显示</p>",
    "group": "room",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"data\": {\n\"id\": 1,// 房间Id\n\"room_name\": \"十三水--新手场\",// 房间名称\n\"status\": 1 //房间状态\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"房间不存在\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoomInfoController.php",
    "groupTitle": "room",
    "name": "GetRoomStatusShowRoom_id"
  },
  {
    "type": "post",
    "url": "/room",
    "title": "十三水房间添加",
    "description": "<p>添加房间</p>",
    "group": "room",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "room_name",
            "description": "<p>游戏名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type_id",
            "description": "<p>游戏种类</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bottom_score",
            "description": "<p>房间底分</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "max_limit",
            "description": "<p>房间限制</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>房间是否可用,1为可用,0为不可用</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>游戏图标</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoomInfoController.php",
    "groupTitle": "room",
    "name": "PostRoom"
  },
  {
    "type": "put",
    "url": "/room/defalutOdds",
    "title": "十三水房间默认赔率方案修改",
    "description": "<p>十三水房间房间默认赔率方案修改</p>",
    "group": "room",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "default_id",
            "description": "<p>默认赔率方案Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "card_type",
            "description": "<p>是否为特殊牌型 1 特殊 2 默认为普通</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "play_name_type",
            "description": "<p>牌型类型 牌型类型 1-13 为特殊 14-22 为普通  1 至尊青龙:,2 一条龙:,3 十二皇族:,4 三同花顺:, 5 三分天下:,6 全大:, 7 全小:, 8 凑一色:, 9 四套三条:, 10 五对三条:,11 六对半:, 12 三顺子:,13 三同花:,14 赢一水:,15 输一水:, 16 和:, 17 冲三:,18 尾墩同花顺:, 19 中墩铁支:, 20 中墩葫芦:, 21 尾墩同花顺:, 22 尾墩铁支:</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "play_rules_odds",
            "description": "<p>牌型赔率 data: { { default_id:1,//十三水房间默认赔率方案Id play_name_type:1,//牌型类型 1-13 为特殊 14-22 为普通 play_rules_odds:1,//牌型赔率 } { default_id:1, play_name_type:1, play_rules_odds:1, } } }</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"保存失败\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoomInfoController.php",
    "groupTitle": "room",
    "name": "PutRoomDefalutodds"
  },
  {
    "type": "put",
    "url": "/room/odds",
    "title": "调整十三水房间盈利率",
    "description": "<p>调整十三水房间盈利率</p>",
    "group": "room",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "room_id",
            "description": "<p>房间ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "min_odds",
            "description": "<p>调整盈利率下限</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "max_odds",
            "description": "<p>调整盈利率上限</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"保存失败\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoomInfoController.php",
    "groupTitle": "room",
    "name": "PutRoomOdds"
  },
  {
    "type": "put",
    "url": "/room/rules",
    "title": "十三水房间赔率方案修改",
    "description": "<p>十三水房间赔率方案修改</p>",
    "group": "room",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rule_id",
            "description": "<p>赔率Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "card_type",
            "description": "<p>是否为特殊牌型 1 特殊 2 默认为普通</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "play_name_type",
            "description": "<p>牌型类型 牌型类型 1-13 为特殊 14-22 为普通  1 至尊青龙:,2 一条龙:,3 十二皇族:,4 三同花顺:, 5 三分天下:,6 全大:, 7 全小:, 8 凑一色:, 9 四套三条:, 10 五对三条:,11 六对半:, 12 三顺子:,13 三同花:,14 赢一水:,15 输一水:, 16 和:, 17 冲三:,18 尾墩同花顺:, 19 中墩铁支:, 20 中墩葫芦:, 21 尾墩同花顺:, 22 尾墩铁支: data: { { rule_id:1,//十三水房间赔率规则方案Id play_name_type:1, //牌型类型 牌型类型 1-13 为特殊 14-22 为普通 play_rules_odds:1,//牌型赔率 } { rule_id:1, play_name_type:1, play_rules_odds:1, } } }</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"保存失败\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoomInfoController.php",
    "groupTitle": "room",
    "name": "PutRoomRules"
  },
  {
    "type": "put",
    "url": "/room/status",
    "title": "编辑十三水房间状态",
    "description": "<p>编辑十三水房间状态</p>",
    "group": "room",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "room_id",
            "description": "<p>房间ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>游戏是否可用,1为可用,0为不可用</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"保存失败\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoomInfoController.php",
    "groupTitle": "room",
    "name": "PutRoomStatus"
  },
  {
    "type": "get",
    "url": "/system/countHallAndNewHall",
    "title": "平台数据统计，厅主/代理总数和新增厅主/代理总数",
    "description": "<p>平台数据统计，厅主/代理总数和新增厅主/代理总数</p>",
    "group": "system",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "type",
            "description": "<p>数据类型，1为厅主类型数据，2为代理商数据，默认为1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "厅主数据\n {\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": {\n            \"xAxis\": [1,2,3,4,5,6],\n            \"new\": [51, 84, 84, 6, 84, 96, 52, 1, 49],\n            \"count\": [63, 5, 4, 64, 89, 126, 98, 9, 864],\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AccountStatisticsController.php",
    "groupTitle": "system",
    "name": "GetSystemCounthallandnewhall"
  },
  {
    "type": "get",
    "url": "/system/sysChart",
    "title": "平台数据统计，天/月注单数据",
    "description": "<p>平台数据统计，天/月注单数据</p>",
    "group": "system",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "type",
            "description": "<p>时间类型，1为天数据，2为月数据，默认为1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"code\": 0,\n       \"text\": \"操作成功\",\n       \"result\": {\n           \"xAxis\": [1,2,3,4,5,6],\n           \"series\":[\n               {data: [2, 5, 6, 0, 0, 0], name: \"注单数\"},\n           ]\n           }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/ChartStatisticsController.php",
    "groupTitle": "system",
    "name": "GetSystemSyschart"
  },
  {
    "type": "get",
    "url": "/system/sysGainData",
    "title": "平台数据统计天/月盈利",
    "description": "<p>平台数据统计天/月盈利</p>",
    "group": "system",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "type",
            "description": "<p>时间类型，1为天数据，2为月数据，默认为1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"code\": 0,\n       \"text\": \"操作成功\",\n       \"result\": {\n        \"xAxis\": [1,2,3,4,5,6],\n         \"series\":[\n               {data: [2, 5, 6, 0, 0, 0], name: \"派彩总额\"},\n              {data: [3, 5, 8, 9, 0, 0], name: \"投注总额\"}\n         ]\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GainStatisticsController.php",
    "groupTitle": "system",
    "name": "GetSystemSysgaindata"
  },
  {
    "type": "get",
    "url": "/online/charAmount",
    "title": "在线统计，当天每个小时时间段投注分布数据统计",
    "description": "<p>在线统计，当天每个小时时间段投注分布数据统计</p>",
    "group": "userGain",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"code\": 0,\n       \"text\": \"操作成功\",\n       \"result\": [\n           {\n               name: '1-1000',\n               data: [320, 302, 301, 334, 390, 330, 320,11,22]//数组长度24；\n           },\n            {\n               name: '10001-10000',\n               data: [320, 302, 301, 334, 390, 330, 320,11,22]//数组长度24；\n           }]\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/ChartStatisticsController.php",
    "groupTitle": "userGain",
    "name": "GetOnlineCharamount"
  },
  {
    "type": "get",
    "url": "/online/chartNumber",
    "title": "在线统计，昨天和今天的投注区间注单数量统计",
    "description": "<p>在线统计，昨天和今天的投注区间注单数量统计</p>",
    "group": "userGain",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"code\": 0,\n       \"text\": \"操作成功\",\n       \"result\": {\n           \"series\":[\n               {data: [2, 5, 6, 0, 0, 0], name: \"今日\"},\n               {data: [3, 5, 8, 9, 0, 0], name: \"昨日\"}\n           ]\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/ChartStatisticsController.php",
    "groupTitle": "userGain",
    "name": "GetOnlineChartnumber"
  },
  {
    "type": "get",
    "url": "/online/user",
    "title": "玩家在线统计，昨日和今日在线玩家数据统计",
    "description": "<p>玩家在线统计，昨日和今日在线玩家数据统计</p>",
    "group": "userGain",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"code\": 0,\n       \"text\": \"操作成功\",\n       \"result\": {\n           \"series\":[\n               {data: [2, 5, 6, 0, 0, 0], name: \"今日在线\"},\n               {data: [3, 5, 8, 9, 0, 0], name: \"昨日在线\"}\n           ]\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AccountStatisticsController.php",
    "groupTitle": "userGain",
    "name": "GetOnlineUser"
  },
  {
    "type": "get",
    "url": "/user/ActiveAndNewAddUser",
    "title": "玩家统计，所有新增的玩家和活跃玩家的数据统计(天、月)",
    "description": "<p>玩家统计，所有新增的玩家和活跃玩家的数据统计(天、月)</p>",
    "group": "userGain",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "type",
            "description": "<p>时间类型，1为天数据，2为月数据，默认为1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"code\": 0,\n   \"text\": \"操作成功\",\n   \"result\": {\n   \"xAxis\": [1,2,3,4,5,6],\n   \"series\":[\n   {data: [2, 5, 6, 0, 0, 0], name: \"新增玩家\"},\n   {data: [3, 5, 8, 9, 0, 0], name: \"活跃玩家\"}\n   ]\n   }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AccountStatisticsController.php",
    "groupTitle": "userGain",
    "name": "GetUserActiveandnewadduser"
  },
  {
    "type": "delete",
    "url": "/whitelist/{id}",
    "title": "删除白名单",
    "description": "<p>删除白名单</p>",
    "group": "whitelist",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 400,\n    \"text\": \"操作失败\",\n    \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/WhitelistController.php",
    "groupTitle": "whitelist",
    "name": "DeleteWhitelistId"
  },
  {
    "type": "get",
    "url": "/whitelist",
    "title": "白名单列表",
    "description": "<p>白名单列表</p>",
    "group": "whitelist",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_name",
            "description": "<p>运营商名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>运营商ip地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>状态：1可用，0不可用</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页 默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示条数 默认 10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1是，0否，默认1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 0,//状态码，0：成功，非0：错误\n            \"text\": \"操作成功\",//文本描述\n            \"result\": {//结果对象\n            \"total\": 2,//总条数\n            \"per_page\": 10,//每页显示条数\n            \"current_page\": 1,//当前页\n            \"last_page\": 1,//上一页\n            \"next_page_url\": null,//下一页url\n            \"prev_page_url\": null,//前一页url\n            \"data\": [//数据对象\n                {\n                \"id\": 1,//白名单id\n                \"ip_info\": \"127.0.0.1,220.95.210.87,192.168.31.28,192.168.31.60,192.168.31.58\",//ip地址集\n                \"agent_id\": \"2\",//代理商id\n                \"agent_name\": \"agent_test\",//代理商名称\n                \"agent_domain\": \"http://www.tt8828.com/Lebo/game.php\",//代理域名\n                \"agent_seckey\": \"7a16812ee6cf273798fb392356ff0d8ae0226a55\",//秘钥\n                \"seckey_exp_date\": \"2017-04-07 21:48:40\",//秘钥过期时间\n                \"state\": \"1\",//状态：1可用，0不可用\n                \"agent_code\": \"c112\"//代理商code，暂时用不到\n                }\n            ]\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 400,\n    \"text\": \"\",\n    \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/WhitelistController.php",
    "groupTitle": "whitelist",
    "name": "GetWhitelist"
  },
  {
    "type": "get",
    "url": "/whitelist/{id}",
    "title": "获取单条白名单",
    "description": "<p>获取单条白名单</p>",
    "group": "whitelist",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 0,//状态码，0：成功，非0：错误\n            \"text\": \"操作成功\",//文本描述\n            \"result\": {//结果对象\n                \"id\": 4,//白名单id\n                \"ip_info\": \"127.0.0.1,192.168.0.1\",//ip地址集\n                \"agent_id\": \"10\",//代理商id\n                \"agent_name\": \"hongbo\",//代理商名称\n                \"agent_domain\": \"http://baidu.com\",//代理域名\n                \"state\": \"1\",//状态：1可用，0不可用\n                \"agent_code\": \"\"//代理商code，暂时用不到\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/WhitelistController.php",
    "groupTitle": "whitelist",
    "name": "GetWhitelistId"
  },
  {
    "type": "get",
    "url": "/whitelist/showKey/{id}",
    "title": "获取白名单秘钥",
    "description": "<p>获取白名单秘钥</p>",
    "group": "whitelist",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,//状态码，0：成功，非0：错误\n\"text\": \"操作成功\",//文本描述\n\"result\": {//结果对象\n\"agent_seckey\": \"f1d206d6b3f3a1e8851ba0cb9ee5edf2539c18a0\",//秘钥\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/WhitelistController.php",
    "groupTitle": "whitelist",
    "name": "GetWhitelistShowkeyId"
  },
  {
    "type": "post",
    "url": "/whitelist",
    "title": "添加白名单",
    "description": "<p>添加白名单列表</p>",
    "group": "whitelist",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_id",
            "description": "<p>代理商ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_domain",
            "description": "<p>代理商域名 http://开头</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip_info",
            "description": "<p>代理商IP  格式：127.0.0.1,128.0.0.2    PS: * 为所有Ip地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>状态：1可用，0失效</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 400,\n    \"text\": \"代理商不存在\",\n    \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/WhitelistController.php",
    "groupTitle": "whitelist",
    "name": "PostWhitelist"
  },
  {
    "type": "put",
    "url": "/whitelist/{id}",
    "title": "保存白名单",
    "description": "<p>保存白名单</p>",
    "group": "whitelist",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_id",
            "description": "<p>代理商ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_domain",
            "description": "<p>代理商域名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip_info",
            "description": "<p>代理商IP  格式：127.0.0.1,128.0.0.2</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>状态：1可用，0失效</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"code\": 0,\n        \"text\": \"\",\n        \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"code\": 400,\n        \"text\": \"\",\n        \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/WhitelistController.php",
    "groupTitle": "whitelist",
    "name": "PutWhitelistId"
  }
] });
