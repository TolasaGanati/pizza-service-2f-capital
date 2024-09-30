import prisma from "../utils/connect.js";

async function main() {
    // Clear existing data
    await prisma.roleOnPermission.deleteMany();
    await prisma.permission.deleteMany();
    await prisma.user.deleteMany();
    await prisma.role.deleteMany();

    // Define permissions for restaurant management and orders
    const permissions = [
        { action: 'Create', subject: 'Pizza' },
        { action: 'Edit', subject: 'Pizza' },
        { action: 'Delete', subject: 'Pizza' },
        { action: 'View', subject: 'Pizza' },
        { action: 'Create', subject: 'Order' },
        { action: 'View', subject: 'Order' },
        { action: 'Update', subject: 'Order' },
        { action: 'Delete', subject: 'Order' },
    ];

    // Create permissions
    await prisma.permission.createMany({
        data: permissions,
        skipDuplicates: true,
    });

    // Create roles
    const restaurantManagerRole = await prisma.role.create({ data: { name: 'restaurant_manager' } });
    const customerRole = await prisma.role.create({ data: { name: 'customer' } });

    // Fetch created permissions
    const createdPermissions = await prisma.permission.findMany();

    // Helper function to find permission ID by action and subject
    const findPermissionId = (action, subject) => {
        return createdPermissions.find(p => p.action === action && p.subject === subject)?.id;
    };

    // Link permissions to roles
    await prisma.roleOnPermission.createMany({
        data: [
            // restaurant_manager role
            { roleId: restaurantManagerRole.id, permissionId: findPermissionId('Create', 'Pizza') },
            { roleId: restaurantManagerRole.id, permissionId: findPermissionId('Edit', 'Pizza') },
            { roleId: restaurantManagerRole.id, permissionId: findPermissionId('Delete', 'Pizza') },
            { roleId: restaurantManagerRole.id, permissionId: findPermissionId('View', 'Pizza') },
            { roleId: restaurantManagerRole.id, permissionId: findPermissionId('View', 'Order') },
            { roleId: restaurantManagerRole.id, permissionId: findPermissionId('Update', 'Order') },
            { roleId: restaurantManagerRole.id, permissionId: findPermissionId('Delete', 'Order') },

            // customer role
            { roleId: customerRole.id, permissionId: findPermissionId('View', 'Pizza') },
            { roleId: customerRole.id, permissionId: findPermissionId('Create', 'Order') },
        ],
    });
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
