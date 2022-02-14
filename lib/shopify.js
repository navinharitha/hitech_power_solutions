const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

async function shopifyData(query) {
  const URL = `https://${domain}/api/2022-01/graphql.json`;
  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => response.json());
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getFeaturedProducts() {
  const query = `
    {
        collectionByHandle(handle: "featured") {
            title
            products(first: 8) {
                edges {
                    node {
                        id
                        title
                        handle
                        priceRange {
                          minVariantPrice {
                            amount
                          }
                        }
                        images(first: 5) {
                            edges {
                                node {
                                    originalSrc
                                    altText
                                }
                            }
                        }
                    }
                }
            } 
        } 
    }    
    `;

  const response = await shopifyData(query);
  const products = response.data?.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : [];
  return products;
}

export async function getPopularProducts() {
  const query = `
    {
        collectionByHandle(handle: "frontpage") {
            title
            products(first: 8) {
                edges {
                    node {
                        id
                        title
                        handle
                        priceRange {
                          minVariantPrice {
                            amount
                          }
                        }
                        images(first: 5) {
                            edges {
                                node {
                                    originalSrc
                                    altText
                                }
                            }
                        }
                    }
                }
            } 
        } 
    }    
    `;

  const response = await shopifyData(query);
  const products = response.data?.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : [];
  return products;
}

export async function getProductsByCollection(handle) {
  const query = `
    {
        collectionByHandle(handle: "${handle}") {
            title
            products(first: 250) {
                edges {
                    node {
                        id
                        title
                        handle
                        priceRange {
                          minVariantPrice {
                            amount
                          }
                        }
                        images(first: 5) {
                            edges {
                                node {
                                    originalSrc
                                    altText
                                }
                            }
                        }
                    }
                }
            } 
        } 
    }    
    `;

  const response = await shopifyData(query);
  const products = response.data.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : [];
  return products;
}

export async function getAllProducts() {
  const query = `{
    products(first: 250) {
      edges {
        node {
          handle
          id
					title
					priceRange {
						minVariantPrice {
							amount
						}
					}
					images(first: 250) {
						edges {
							node {
								originalSrc
								altText
							}
						}
					} 
        }
      }
    }
  }`;

  const response = await shopifyData(query);
  const slugs = response.data.products.edges
    ? response.data.products.edges
    : [];
  return slugs;
}

export async function getProduct(handle) {
  const query = `{
    productByHandle(handle: "${handle}") {
      id
      title 
      handle
      description
      images(first: 5) {
        edges {
          node {
            originalSrc
            altText
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
        }
      }
      options {
        name
        values
        id
      }
      availableForSale
      metafield(key: "short_description", namespace: "my_fields") {
        value
      }
      variants(first: 25) {
        edges {
          node {
            selectedOptions {
              name
              value
            }
            image {
              originalSrc
              altText
            }
            title
            id
            priceV2 {
              amount
            }
          }
        }
      }
    }
  }`;

  const response = await shopifyData(query);
  const product = response.data.productByHandle
    ? response.data.productByHandle
    : {};
  return product;
}

export async function getCollections() {
  const query = `{
    collections(first: 100) {
      edges {
        node {
          title
          handle
          description
          products(first: 5) {
            edges {
              node {
                id
                featuredImage {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  }`;

  const response = await shopifyData(query);
  const collections = response.data.collections.edges
    ? response.data.collections.edges
    : [];
  return collections;
}

export async function createCheckout(id, quantity) {
  const query = `
  mutation {
    checkoutCreate(input: {
      lineItems: [{ variantId: "${id}", quantity: ${quantity} }]
    }) {
      checkout {
        id
        webUrl
      }
    }
  }`;
  const response = await shopifyData(query);
  const checkout = response.data.checkoutCreate.checkout
    ? response.data.checkoutCreate.checkout
    : [];
  return checkout;
}

export async function updateCheckout(id, lineItems) {
  const lineItemsObject = lineItems.map((item) => {
    return `{
      variantId: "${item.id}",
      quantity: ${item.variantQuantity}
    }`;
  });
  const query = `
  mutation {
    checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}" ) {
      checkout {
        id
        webUrl
        lineItems(first: 25) {
          edges {
            node {
              id
              title
              quantity
            }
          }
        }
      }
    }
  }`;
  const response = await shopifyData(query);
  const checkout = response.data.checkoutLineItemsReplace.checkout
    ? response.data.checkoutLineItemsReplace.checkout
    : [];
  return checkout;
}
