import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import OrderLayout from "../features/order/OrderLayout";
import SectionWithTitle from "../ui/SectionWithTitle";

function Order() {
  const { orderId } = useParams();
  const { order } = useSelector((state) => state.order);

  if (!order)
    return (
      <SectionWithTitle
        shadowTitle="Coming soon"
        mainTitle={`The ability to check your orders will be available soon 🥳`}
        fullHeight={true}
      />
    );

  return (
    <SectionWithTitle shadowTitle="Congrats" mainTitle={`Order #${orderId}`}>
      <OrderLayout />
    </SectionWithTitle>
  );
}

export default Order;

// ORDER OBJECT
// {
//   "version": "v1.5",
//   "sandbox": true,
//   "id": "ord_LvJjoPz6qdle0n",
//   "checkout_token_id": "chkt_8XxzoBvdeVoPQA",
//   "cart_id": "cart_RyWOwmz6zKonEa",
//   "customer_reference": "PPLZ-280462",
//   "created": 1708436340,
//   "status": "open",
//   "status_payment": "paid",
//   "status_fulfillment": "not_fulfilled",
//   "currency": {
//       "code": "USD",
//       "symbol": "$"
//   },
//   "order_value": {
//       "raw": 26738.99,
//       "formatted": "26,738.99",
//       "formatted_with_symbol": "$26,738.99",
//       "formatted_with_code": "26,738.99 USD"
//   },
//   "conditionals": {
//       "collected_fullname": true,
//       "collected_shipping_address": true,
//       "collected_billing_address": true,
//       "collected_extra_fields": false,
//       "collected_tax": false,
//       "collected_eu_vat_moss_evidence": false,
//       "has_physical_fulfillment": true,
//       "has_digital_fulfillment": null,
//       "has_extend_fulfillment": false,
//       "has_webhook_fulfillment": false,
//       "has_extend_apps": false,
//       "has_pay_what_you_want": false,
//       "has_discounts": false,
//       "has_subscription_items": false,
//       "is_free": false,
//       "is_fulfilled": false
//   },
//   "meta": null,
//   "redirect": false,
//   "collected": {
//       "fullname": true,
//       "shipping_address": true,
//       "billing_address": true,
//       "extra_fields": false,
//       "tax": false,
//       "eu_vat_moss_evidence": false
//   },
//   "has": {
//       "physical_fulfillment": true,
//       "digital_fulfillment": false,
//       "extend_fulfillment": false,
//       "webhook_fulfillment": false,
//       "extend_apps": false,
//       "pay_what_you_want": false,
//       "discounts": false,
//       "subscription_items": false
//   },
//   "is": {
//       "free": false,
//       "fulfilled": false
//   },
//   "order": {
//       "subtotal": {
//           "raw": 26719,
//           "formatted": "26,719.00",
//           "formatted_with_symbol": "$26,719.00",
//           "formatted_with_code": "26,719.00 USD"
//       },
//       "total": {
//           "raw": 26738.99,
//           "formatted": "26,738.99",
//           "formatted_with_symbol": "$26,738.99",
//           "formatted_with_code": "26,738.99 USD"
//       },
//       "total_with_tax": {
//           "raw": 26738.99,
//           "formatted": "26,738.99",
//           "formatted_with_symbol": "$26,738.99",
//           "formatted_with_code": "26,738.99 USD"
//       },
//       "total_paid": {
//           "raw": 26738.99,
//           "formatted": "26,738.99",
//           "formatted_with_symbol": "$26,738.99",
//           "formatted_with_code": "26,738.99 USD"
//       },
//       "adjustments": {
//           "taxable": {
//               "raw": 0,
//               "formatted": "0.00",
//               "formatted_with_symbol": "$0.00",
//               "formatted_with_code": "0.00 USD"
//           },
//           "untaxable": {
//               "raw": 0,
//               "formatted": "0.00",
//               "formatted_with_symbol": "$0.00",
//               "formatted_with_code": "0.00 USD"
//           },
//           "total": {
//               "raw": 0,
//               "formatted": "0.00",
//               "formatted_with_symbol": "$0.00",
//               "formatted_with_code": "0.00 USD"
//           }
//       },
//       "pay_what_you_want": {
//           "enabled": false,
//           "minimum": null,
//           "customer_set_price": null
//       },
//       "shipping": {
//           "id": "ship_8XO3wpPPAwYAzQ",
//           "description": "DZ",
//           "provider": "chec",
//           "price": {
//               "raw": 19.99,
//               "formatted": "19.99",
//               "formatted_with_symbol": "$19.99",
//               "formatted_with_code": "19.99 USD"
//           }
//       },
//       "line_items": [
//           {
//               "id": "item_VPvL5zjkRG5AQk",
//               "product_id": "prod_mOVKl496v6wprR",
//               "product_name": "Pro Display XDR",
//               "product_sku": null,
//               "quantity": 1,
//               "price": {
//                   "raw": 7197,
//                   "formatted": "7,197.00",
//                   "formatted_with_symbol": "$7,197.00",
//                   "formatted_with_code": "7,197.00 USD"
//               },
//               "line_total": {
//                   "raw": 7197,
//                   "formatted": "7,197.00",
//                   "formatted_with_symbol": "$7,197.00",
//                   "formatted_with_code": "7,197.00 USD"
//               },
//               "line_total_with_tax": {
//                   "raw": 7197,
//                   "formatted": "7,197.00",
//                   "formatted_with_symbol": "$7,197.00",
//                   "formatted_with_code": "7,197.00 USD"
//               },
//               "variant": [],
//               "selected_options": [
//                   {
//                       "group_id": "vgrp_r2LM5QEaP5ZV1g",
//                       "group_name": "Color",
//                       "option_id": "optn_RqEv5xk0JqoZz4",
//                       "option_name": "Space Grey"
//                   },
//                   {
//                       "group_id": "vgrp_Op1YoVaNWwXLv9",
//                       "group_name": "Display",
//                       "option_id": "optn_VKXmwDyYrqorgD",
//                       "option_name": "Nano-texture Glass"
//                   },
//                   {
//                       "group_id": "vgrp_4WJvlKWjWlbYV1",
//                       "group_name": "Pro Stand",
//                       "option_id": "optn_eN1ql9kYdkoz3y",
//                       "option_name": "Pro Stand"
//                   },
//                   {
//                       "group_id": "vgrp_zkK6oLWZvwXn0Q",
//                       "group_name": "VESA Mount Adapter",
//                       "option_id": "optn_7ZAMo1Jg8X5NJ4",
//                       "option_name": "VESA Mount Adapter"
//                   }
//               ],
//               "tax": {
//                   "is_taxable": false,
//                   "amount": {
//                       "raw": 0,
//                       "formatted": "0.00",
//                       "formatted_with_symbol": "$0.00",
//                       "formatted_with_code": "0.00 USD"
//                   },
//                   "taxable_amount": {
//                       "raw": 7197,
//                       "formatted": "7,197.00",
//                       "formatted_with_symbol": "$7,197.00",
//                       "formatted_with_code": "7,197.00 USD"
//                   },
//                   "rate": 0,
//                   "rate_percentage": "0%",
//                   "breakdown": []
//               },
//               "image": {
//                   "id": "ast_NXELwjBB07w3A4",
//                   "url": "https://cdn.chec.io/merchants/54589/assets/vo3N3DqXslegg9qK|pro-display-gallery1-201909.jpeg",
//                   "description": null,
//                   "is_image": true,
//                   "filename": "pro-display-gallery1-201909.jpeg",
//                   "file_size": 1019330,
//                   "file_extension": "jpeg",
//                   "image_dimensions": {
//                       "width": 4000,
//                       "height": 3072
//                   },
//                   "meta": [],
//                   "created_at": 1705852559,
//                   "updated_at": 1705852562
//               }
//           },
//           {
//               "id": "item_nPEVlNGy10wa7d",
//               "product_id": "prod_BkyN5YQDP750b6",
//               "product_name": "iMac - M3 Chip",
//               "product_sku": null,
//               "quantity": 3,
//               "price": {
//                   "raw": 2858,
//                   "formatted": "2,858.00",
//                   "formatted_with_symbol": "$2,858.00",
//                   "formatted_with_code": "2,858.00 USD"
//               },
//               "line_total": {
//                   "raw": 8574,
//                   "formatted": "8,574.00",
//                   "formatted_with_symbol": "$8,574.00",
//                   "formatted_with_code": "8,574.00 USD"
//               },
//               "line_total_with_tax": {
//                   "raw": 8574,
//                   "formatted": "8,574.00",
//                   "formatted_with_symbol": "$8,574.00",
//                   "formatted_with_code": "8,574.00 USD"
//               },
//               "variant": [],
//               "selected_options": [
//                   {
//                       "group_id": "vgrp_gvRjwOWNVw4mNL",
//                       "group_name": "Memory",
//                       "option_id": "optn_4WJvlKqYGeobYV",
//                       "option_name": "24GB"
//                   },
//                   {
//                       "group_id": "vgrp_N7GKwbPNM53EX4",
//                       "group_name": "Storage",
//                       "option_id": "optn_QG375v3EeWlrMO",
//                       "option_name": "2TB"
//                   },
//                   {
//                       "group_id": "vgrp_mOVKl4Wm35prRP",
//                       "group_name": "Color",
//                       "option_id": "optn_eN1ql9kYn2oz3y",
//                       "option_name": "Orange"
//                   },
//                   {
//                       "group_id": "vgrp_ZRjywMWXJ57Y8G",
//                       "group_name": "Mouse",
//                       "option_id": "optn_L1vOoZKA225Ra8",
//                       "option_name": "Magic Mouse + Magic Trackpad"
//                   },
//                   {
//                       "group_id": "vgrp_aZWNoyVxz580JA",
//                       "group_name": "Keyboard",
//                       "option_id": "optn_kd6Ll2Ag205V2m",
//                       "option_name": "Magic Keyboard with Touch ID and Numeric Keyboard"
//                   }
//               ],
//               "tax": {
//                   "is_taxable": false,
//                   "amount": {
//                       "raw": 0,
//                       "formatted": "0.00",
//                       "formatted_with_symbol": "$0.00",
//                       "formatted_with_code": "0.00 USD"
//                   },
//                   "taxable_amount": {
//                       "raw": 8574,
//                       "formatted": "8,574.00",
//                       "formatted_with_symbol": "$8,574.00",
//                       "formatted_with_code": "8,574.00 USD"
//                   },
//                   "rate": 0,
//                   "rate_percentage": "0%",
//                   "breakdown": []
//               },
//               "image": {
//                   "id": "ast_zkK6oLpp2voXn0",
//                   "url": "https://cdn.chec.io/merchants/54589/assets/wJv2EwLfwr7gcB9Y|imac-24-touch-id-orange-gallery-1.jpeg",
//                   "description": null,
//                   "is_image": true,
//                   "filename": "imac-24-touch-id-orange-gallery-1.jpeg",
//                   "file_size": 822356,
//                   "file_extension": "jpeg",
//                   "image_dimensions": {
//                       "width": 4000,
//                       "height": 3074
//                   },
//                   "meta": [],
//                   "created_at": 1705849988,
//                   "updated_at": 1705849990
//               }
//           },
//           {
//               "id": "item_9BAmwJn24QweXd",
//               "product_id": "prod_RyWOwmeG76wnEa",
//               "product_name": "Mac Pro",
//               "product_sku": null,
//               "quantity": 1,
//               "price": {
//                   "raw": 10948,
//                   "formatted": "10,948.00",
//                   "formatted_with_symbol": "$10,948.00",
//                   "formatted_with_code": "10,948.00 USD"
//               },
//               "line_total": {
//                   "raw": 10948,
//                   "formatted": "10,948.00",
//                   "formatted_with_symbol": "$10,948.00",
//                   "formatted_with_code": "10,948.00 USD"
//               },
//               "line_total_with_tax": {
//                   "raw": 10948,
//                   "formatted": "10,948.00",
//                   "formatted_with_symbol": "$10,948.00",
//                   "formatted_with_code": "10,948.00 USD"
//               },
//               "variant": [],
//               "selected_options": [
//                   {
//                       "group_id": "vgrp_NqKE50WjjodgBL",
//                       "group_name": "Color",
//                       "option_id": "optn_O3bR5X16WMlnzd",
//                       "option_name": "Space Grey"
//                   },
//                   {
//                       "group_id": "vgrp_8XO3wp4aNwYAzQ",
//                       "group_name": "Memory",
//                       "option_id": "optn_8XO3wpM2j4oYAz",
//                       "option_name": "194GB"
//                   },
//                   {
//                       "group_id": "vgrp_bO6J5aDNPoEjpK",
//                       "group_name": "Storage",
//                       "option_id": "optn_4WJvlKqYdxobYV",
//                       "option_name": "8TB"
//                   },
//                   {
//                       "group_id": "vgrp_Kvg9l6W6dw1bB7",
//                       "group_name": "Type",
//                       "option_id": "optn_DWy4oGjYZnw6Jx",
//                       "option_name": "Rack"
//                   },
//                   {
//                       "group_id": "vgrp_A12JwrEVdlPjnk",
//                       "group_name": "Mouse",
//                       "option_id": "optn_0egY5eKx88w3Qn",
//                       "option_name": "Magic Mouse + Magic Trackpad"
//                   }
//               ],
//               "tax": {
//                   "is_taxable": false,
//                   "amount": {
//                       "raw": 0,
//                       "formatted": "0.00",
//                       "formatted_with_symbol": "$0.00",
//                       "formatted_with_code": "0.00 USD"
//                   },
//                   "taxable_amount": {
//                       "raw": 10948,
//                       "formatted": "10,948.00",
//                       "formatted_with_symbol": "$10,948.00",
//                       "formatted_with_code": "10,948.00 USD"
//                   },
//                   "rate": 0,
//                   "rate_percentage": "0%",
//                   "breakdown": []
//               },
//               "image": {
//                   "id": "ast_gnZO5kxxAZl7MN",
//                   "url": "https://cdn.chec.io/merchants/54589/assets/eAuZvPxgzIx3sZHa|mac-pro-tower-2023-gallery1.jpeg",
//                   "description": null,
//                   "is_image": true,
//                   "filename": "mac-pro-tower-2023-gallery1.jpeg",
//                   "file_size": 1011894,
//                   "file_extension": "jpeg",
//                   "image_dimensions": {
//                       "width": 4000,
//                       "height": 3074
//                   },
//                   "meta": [],
//                   "created_at": 1705851873,
//                   "updated_at": 1705851880
//               }
//           }
//       ],
//       "discount": [],
//       "giftcard": []
//   },
//   "shipping": {
//       "id": "adrs_0YnEoqr365e7P6",
//       "name": "Akram Adjab",
//       "street": "502 street",
//       "street_2": null,
//       "town_city": "El Hadjar",
//       "postal_zip_code": "23004",
//       "county_state": "23",
//       "country": "DZ",
//       "delivery_instructions": null,
//       "meta": null
//   },
//   "billing": {
//       "id": "adrs_0YnEoqr365e7P6",
//       "name": "Akram Adjab",
//       "street": "502 street",
//       "street_2": null,
//       "town_city": "El Hadjar",
//       "postal_zip_code": "23004",
//       "county_state": "23",
//       "country": "DZ",
//       "delivery_instructions": null,
//       "meta": null
//   },
//   "transactions": [
//       {
//           "id": "trns_yA6nldPnDMlEWb",
//           "type": "charge",
//           "status": "complete",
//           "status_reason": "complete",
//           "charge_date": 1708436340,
//           "gateway": "test_gateway",
//           "gateway_name": "Test Gateway",
//           "gateway_transaction_id": "1708436340",
//           "gateway_customer_id": null,
//           "gateway_reference": "4242",
//           "notes": "",
//           "amount": {
//               "raw": 26738.99,
//               "formatted": "26,738.99",
//               "formatted_with_symbol": "$26,738.99",
//               "formatted_with_code": "26,738.99 USD"
//           },
//           "payment_source_type": "card",
//           "payment_source": {
//               "brand": "visa",
//               "country": "US",
//               "billing_zip_postal_code": "94107"
//           },
//           "meta": null,
//           "created": 1708436340,
//           "updated": 1708436340,
//           "dunning": {
//               "is_dunning": false,
//               "failed_attempts": 0,
//               "last_failed_attempt": null,
//               "next_attempt": null
//           }
//       }
//   ],
//   "fulfillment": {
//       "physical": {
//           "items": [
//               {
//                   "id": "ful_NXELwjdaDq53A4",
//                   "shipping_method_id": "ship_8XO3wpPPAwYAzQ",
//                   "line_item_id": "item_VPvL5zjkRG5AQk",
//                   "product_id": "prod_mOVKl496v6wprR",
//                   "shipping_description": "DZ",
//                   "provider": "chec",
//                   "provider_type": "native_shipping",
//                   "product_name": "Pro Display XDR",
//                   "status": "not_fulfilled",
//                   "quantity": {
//                       "total": 1,
//                       "fulfilled": 0,
//                       "remaining": 1
//                   },
//                   "quantity_fulfilled": 0,
//                   "quantity_remaining": 1,
//                   "last_updated": 1708436340,
//                   "linked_shipments": [],
//                   "selected_options": [
//                       {
//                           "group_id": "vgrp_r2LM5QEaP5ZV1g",
//                           "group_name": "Color",
//                           "option_id": "optn_RqEv5xk0JqoZz4",
//                           "option_name": "Space Grey"
//                       },
//                       {
//                           "group_id": "vgrp_Op1YoVaNWwXLv9",
//                           "group_name": "Display",
//                           "option_id": "optn_VKXmwDyYrqorgD",
//                           "option_name": "Nano-texture Glass"
//                       },
//                       {
//                           "group_id": "vgrp_4WJvlKWjWlbYV1",
//                           "group_name": "Pro Stand",
//                           "option_id": "optn_eN1ql9kYdkoz3y",
//                           "option_name": "Pro Stand"
//                       },
//                       {
//                           "group_id": "vgrp_zkK6oLWZvwXn0Q",
//                           "group_name": "VESA Mount Adapter",
//                           "option_id": "optn_7ZAMo1Jg8X5NJ4",
//                           "option_name": "VESA Mount Adapter"
//                       }
//                   ]
//               },
//               {
//                   "id": "ful_L1vOoZdpE0lRa8",
//                   "shipping_method_id": "ship_8XO3wpPPAwYAzQ",
//                   "line_item_id": "item_nPEVlNGy10wa7d",
//                   "product_id": "prod_BkyN5YQDP750b6",
//                   "shipping_description": "DZ",
//                   "provider": "chec",
//                   "provider_type": "native_shipping",
//                   "product_name": "iMac - M3 Chip",
//                   "status": "not_fulfilled",
//                   "quantity": {
//                       "total": 3,
//                       "fulfilled": 0,
//                       "remaining": 3
//                   },
//                   "quantity_fulfilled": 0,
//                   "quantity_remaining": 3,
//                   "last_updated": 1708436340,
//                   "linked_shipments": [],
//                   "selected_options": [
//                       {
//                           "group_id": "vgrp_gvRjwOWNVw4mNL",
//                           "group_name": "Memory",
//                           "option_id": "optn_4WJvlKqYGeobYV",
//                           "option_name": "24GB"
//                       },
//                       {
//                           "group_id": "vgrp_N7GKwbPNM53EX4",
//                           "group_name": "Storage",
//                           "option_id": "optn_QG375v3EeWlrMO",
//                           "option_name": "2TB"
//                       },
//                       {
//                           "group_id": "vgrp_mOVKl4Wm35prRP",
//                           "group_name": "Color",
//                           "option_id": "optn_eN1ql9kYn2oz3y",
//                           "option_name": "Orange"
//                       },
//                       {
//                           "group_id": "vgrp_ZRjywMWXJ57Y8G",
//                           "group_name": "Mouse",
//                           "option_id": "optn_L1vOoZKA225Ra8",
//                           "option_name": "Magic Mouse + Magic Trackpad"
//                       },
//                       {
//                           "group_id": "vgrp_aZWNoyVxz580JA",
//                           "group_name": "Keyboard",
//                           "option_id": "optn_kd6Ll2Ag205V2m",
//                           "option_name": "Magic Keyboard with Touch ID and Numeric Keyboard"
//                       }
//                   ]
//               },
//               {
//                   "id": "ful_0YnEoqx7ZWwe7P",
//                   "shipping_method_id": "ship_8XO3wpPPAwYAzQ",
//                   "line_item_id": "item_9BAmwJn24QweXd",
//                   "product_id": "prod_RyWOwmeG76wnEa",
//                   "shipping_description": "DZ",
//                   "provider": "chec",
//                   "provider_type": "native_shipping",
//                   "product_name": "Mac Pro",
//                   "status": "not_fulfilled",
//                   "quantity": {
//                       "total": 1,
//                       "fulfilled": 0,
//                       "remaining": 1
//                   },
//                   "quantity_fulfilled": 0,
//                   "quantity_remaining": 1,
//                   "last_updated": 1708436340,
//                   "linked_shipments": [],
//                   "selected_options": [
//                       {
//                           "group_id": "vgrp_NqKE50WjjodgBL",
//                           "group_name": "Color",
//                           "option_id": "optn_O3bR5X16WMlnzd",
//                           "option_name": "Space Grey"
//                       },
//                       {
//                           "group_id": "vgrp_8XO3wp4aNwYAzQ",
//                           "group_name": "Memory",
//                           "option_id": "optn_8XO3wpM2j4oYAz",
//                           "option_name": "194GB"
//                       },
//                       {
//                           "group_id": "vgrp_bO6J5aDNPoEjpK",
//                           "group_name": "Storage",
//                           "option_id": "optn_4WJvlKqYdxobYV",
//                           "option_name": "8TB"
//                       },
//                       {
//                           "group_id": "vgrp_Kvg9l6W6dw1bB7",
//                           "group_name": "Type",
//                           "option_id": "optn_DWy4oGjYZnw6Jx",
//                           "option_name": "Rack"
//                       },
//                       {
//                           "group_id": "vgrp_A12JwrEVdlPjnk",
//                           "group_name": "Mouse",
//                           "option_id": "optn_0egY5eKx88w3Qn",
//                           "option_name": "Magic Mouse + Magic Trackpad"
//                       }
//                   ]
//               }
//           ],
//           "shipments": []
//       },
//       "digital": {
//           "downloads": []
//       }
//   },
//   "customer": {
//       "id": "cstmr_NqKE50OrqjodgB",
//       "external_id": null,
//       "firstname": "Akram",
//       "lastname": "Adjab",
//       "email": "adj.perso@gmail.com",
//       "phone": "+213780543911",
//       "meta": [],
//       "created": 1708371244,
//       "updated": 1708371245
//   },
//   "extra_fields": [],
//   "client_details": {
//       "ip_address": "197.118.68.115",
//       "country_code": "DZ",
//       "country_name": "Algeria",
//       "region_code": "31",
//       "region_name": "Oran",
//       "city": "Douar Rouached",
//       "postal_zip_code": "",
//       "_copyright": "This location was calculated using GeoLite2 data created by MaxMind - http://www.maxmind.com"
//   },
//   "tax": {
//       "amount": {
//           "raw": 0,
//           "formatted": "0.00",
//           "formatted_with_symbol": "$0.00",
//           "formatted_with_code": "0.00 USD"
//       },
//       "included_in_price": false,
//       "provider": "chec",
//       "provider_type": "native",
//       "breakdown": [],
//       "zone": {
//           "country": "DZ",
//           "region": "23",
//           "postal_zip_code": "23004",
//           "ip_address": null
//       }
//   },
//   "adjustments": [],
//   "merchant": {
//       "id": 54589,
//       "name": "Applez",
//       "description": "",
//       "status": "active",
//       "country": "US",
//       "currency": {
//           "symbol": "$",
//           "code": "USD"
//       },
//       "has": {
//           "logo": false,
//           "cover": false,
//           "analytics": false,
//           "description": false,
//           "enabled_hosted_checkouts": true,
//           "enabled_hosted_storefront": true
//       },
//       "support_email": "adj.subsc@gmail.com",
//       "logo_shape": null,
//       "intercom": true,
//       "analytics": {
//           "google": {
//               "settings": {
//                   "tracking_id": null,
//                   "linked_domains": []
//               }
//           }
//       },
//       "images": {
//           "logo": null,
//           "cover": null
//       }
//   }
// }
